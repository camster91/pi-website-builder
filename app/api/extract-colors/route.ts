import { NextRequest, NextResponse } from 'next';
import { getServerSession } from 'next-auth';
import sharp from 'sharp';
import { authOptions } from '@/lib/auth';

// ============================================================================
// Helper Functions - Color Utilities
// ============================================================================

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : [0, 0, 0];
}

function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (val: number) => Math.max(0, Math.min(255, Math.round(val)));
  const toHex = (val: number) => clamp(val).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function getLuminance(r: number, g: number, b: number): number {
  // Relative luminance formula (WCAG)
  const [rs, gs, bs] = [r / 255, g / 255, b / 255].map((val) =>
    val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getSaturation(r: number, g: number, b: number): number {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  return max === 0 ? 0 : delta / max;
}

function colorDistance(a: number[], b: number[]): number {
  // Euclidean distance in RGB space
  return Math.sqrt(
    Math.pow(a[0] - b[0], 2) +
      Math.pow(a[1] - b[1], 2) +
      Math.pow(a[2] - b[2], 2)
  );
}

// ============================================================================
// K-Means Clustering Implementation
// ============================================================================

interface Cluster {
  center: number[];
  pixels: number[][];
}

function kMeans(
  pixels: number[][],
  k: number,
  iterations: number
): Cluster[] {
  if (pixels.length === 0) return [];
  if (pixels.length <= k) {
    return pixels.map((pixel) => ({ center: pixel, pixels: [pixel] }));
  }

  // Initialize centroids using k-means++ algorithm for better initial distribution
  const centroids: number[][] = [];
  
  // First centroid is random
  centroids.push(pixels[Math.floor(Math.random() * pixels.length)]);

  // Choose remaining centroids with probability proportional to distance squared
  while (centroids.length < k) {
    const distances = pixels.map((pixel) => {
      const minDist = Math.min(
        ...centroids.map((centroid) => colorDistance(pixel, centroid))
      );
      return minDist * minDist;
    });

    const totalDist = distances.reduce((sum, d) => sum + d, 0);
    let random = Math.random() * totalDist;

    for (let i = 0; i < pixels.length; i++) {
      random -= distances[i];
      if (random <= 0) {
        centroids.push(pixels[i]);
        break;
      }
    }
  }

  // Run k-means iterations
  for (let iter = 0; iter < iterations; iter++) {
    // Assign pixels to nearest centroid
    const clusters: Cluster[] = centroids.map((center) => ({
      center,
      pixels: [],
    }));

    for (const pixel of pixels) {
      let minDist = Infinity;
      let closestIdx = 0;

      for (let i = 0; i < centroids.length; i++) {
        const dist = colorDistance(pixel, centroids[i]);
        if (dist < minDist) {
          minDist = dist;
          closestIdx = i;
        }
      }

      clusters[closestIdx].pixels.push(pixel);
    }

    // Update centroids
    for (let i = 0; i < clusters.length; i++) {
      if (clusters[i].pixels.length === 0) {
        // Keep old centroid if no pixels assigned
        continue;
      }

      const newCenter = [0, 0, 0];
      for (const pixel of clusters[i].pixels) {
        newCenter[0] += pixel[0];
        newCenter[1] += pixel[1];
        newCenter[2] += pixel[2];
      }

      clusters[i].center = [
        Math.round(newCenter[0] / clusters[i].pixels.length),
        Math.round(newCenter[1] / clusters[i].pixels.length),
        Math.round(newCenter[2] / clusters[i].pixels.length),
      ];
      centroids[i] = clusters[i].center;
    }
  }

  // Final assignment
  const finalClusters: Cluster[] = centroids.map((center) => ({
    center,
    pixels: [],
  }));

  for (const pixel of pixels) {
    let minDist = Infinity;
    let closestIdx = 0;

    for (let i = 0; i < centroids.length; i++) {
      const dist = colorDistance(pixel, centroids[i]);
      if (dist < minDist) {
        minDist = dist;
        closestIdx = i;
      }
    }

    finalClusters[closestIdx].pixels.push(pixel);
  }

  return finalClusters.filter((cluster) => cluster.pixels.length > 0);
}

// ============================================================================
// Color Extraction & Palette Generation
// ============================================================================

interface ExtractedColor {
  hex: string;
  rgb: [number, number, number];
  population: number;
  role: string;
}

interface ColorPalette {
  primary: string;
  primaryDark: string;
  accent: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  bg: string;
  bgCard: string;
  bgSection: string;
  border: string;
}

async function extractColors(imageBuffer: Buffer): Promise<{
  colors: ExtractedColor[];
  palette: ColorPalette;
}> {
  // 1. Resize image to 150x150 for fast sampling
  const resized = await sharp(imageBuffer)
    .resize(150, 150, { fit: 'cover' })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = resized;
  const pixels: number[][] = [];

  // 2. Sample every 3rd pixel, skip near-white and near-black
  for (let i = 0; i < data.length; i += info.channels * 3) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Skip near-white pixels
    if (r > 240 && g > 240 && b > 240) continue;
    
    // Skip near-black pixels
    if (r < 15 && g < 15 && b < 15) continue;

    pixels.push([r, g, b]);
  }

  // 3. Run k-means with k=6, 10 iterations
  const clusters = kMeans(pixels, 6, 10);

  // 4. Sort clusters by population (largest first)
  const totalPixels = pixels.length;
  const sortedClusters = clusters
    .map((cluster) => ({
      ...cluster,
      population: cluster.pixels.length / totalPixels,
    }))
    .sort((a, b) => b.population - a.population);

  // 5. Create initial color list
  const colors: ExtractedColor[] = sortedClusters.map((cluster, idx) => {
    const [r, g, b] = cluster.center;
    return {
      hex: rgbToHex(r, g, b),
      rgb: [r, g, b] as [number, number, number],
      population: cluster.population,
      role: idx === 0 ? 'primary' : 'secondary',
    };
  });

  // 6. Map colors to semantic roles
  const palette = generatePalette(colors);

  // Update roles in colors array
  colors[0].role = 'primary';
  if (colors.length > 1) colors[1].role = 'secondary';
  if (colors.length > 2) colors[2].role = 'accent';

  return { colors, palette };
}

function generatePalette(colors: ExtractedColor[]): ColorPalette {
  if (colors.length === 0) {
    // Fallback palette
    return {
      primary: '#3B82F6',
      primaryDark: '#2563EB',
      accent: '#F59E0B',
      text: '#1A1A1A',
      textSecondary: '#555555',
      textMuted: '#999999',
      bg: '#FFFFFF',
      bgCard: '#F8F8F8',
      bgSection: '#F2F2F2',
      border: '#E5E5E5',
    };
  }

  // Find most saturated non-dark cluster → primary
  const colorsByLuminance = [...colors].map((color) => ({
    ...color,
    luminance: getLuminance(...color.rgb),
    saturation: getSaturation(...color.rgb),
  }));

  const nonDarkColors = colorsByLuminance.filter((c) => c.luminance > 0.15);
  const primaryColor =
    nonDarkColors.length > 0
      ? nonDarkColors.reduce((prev, curr) =>
          curr.saturation > prev.saturation ? curr : prev
        )
      : colorsByLuminance[0];

  // Darkened version of primary (multiply by 0.8) → primaryDark
  const [pr, pg, pb] = primaryColor.rgb;
  const primaryDark = rgbToHex(pr * 0.65, pg * 0.65, pb * 0.65);

  // Second most saturated → accent
  const accentColor =
    nonDarkColors.length > 1
      ? nonDarkColors
          .filter((c) => c.hex !== primaryColor.hex)
          .reduce((prev, curr) =>
            curr.saturation > prev.saturation ? curr : prev
          )
      : colorsByLuminance[1] || primaryColor;

  // Most neutral dark → text
  const darkColors = colorsByLuminance.filter((c) => c.luminance < 0.3);
  const textColor =
    darkColors.length > 0
      ? darkColors.reduce((prev, curr) =>
          curr.saturation < prev.saturation ? curr : prev
        )
      : { hex: '#1A1A1A' };

  // Check if we should use light theme or dark theme
  const avgLuminance =
    colorsByLuminance.reduce((sum, c) => sum + c.luminance, 0) /
    colorsByLuminance.length;

  const isDarkTheme = avgLuminance < 0.3;

  let bg: string, bgCard: string, bgSection: string, text: string;
  let textSecondary: string, textMuted: string;

  if (isDarkTheme) {
    // Dark theme
    const darkestColor = colorsByLuminance.reduce((prev, curr) =>
      curr.luminance < prev.luminance ? curr : prev
    );
    bg = darkestColor.hex;
    bgCard = rgbToHex(
      Math.min(255, darkestColor.rgb[0] + 20),
      Math.min(255, darkestColor.rgb[1] + 20),
      Math.min(255, darkestColor.rgb[2] + 20)
    );
    bgSection = rgbToHex(
      Math.min(255, darkestColor.rgb[0] + 30),
      Math.min(255, darkestColor.rgb[1] + 30),
      Math.min(255, darkestColor.rgb[2] + 30)
    );
    text = '#F5F5F5';
    textSecondary = '#D0D0D0';
    textMuted = '#999999';
  } else {
    // Light theme
    const lightestColor = colorsByLuminance.reduce((prev, curr) =>
      curr.luminance > prev.luminance ? curr : prev
    );
    
    // Use white if the lightness is too close to a color
    const isLightEnough = lightestColor.luminance > 0.85;
    bg = isLightEnough ? lightestColor.hex : '#FFFFFF';
    bgCard = '#F8F8F8';
    bgSection = '#F2F2F2';
    text = textColor.hex;
    textSecondary = '#555555';
    textMuted = '#999999';
  }

  const border = isDarkTheme ? '#404040' : '#E5E5E5';

  return {
    primary: primaryColor.hex,
    primaryDark,
    accent: accentColor.hex,
    text,
    textSecondary,
    textMuted,
    bg,
    bgCard,
    bgSection,
    border,
  };
}

// ============================================================================
// API Route Handler
// ============================================================================

export async function POST(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Parse multipart form data
    const formData = await req.formData();
    const file = formData.get('logo') as File | null;

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'File must be an image' },
        { status: 400 }
      );
    }

    // Validate file size (5MB max)
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: 'File size exceeds 5MB limit' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Extract colors and generate palette
    const result = await extractColors(buffer);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error extracting colors:', error);
    return NextResponse.json(
      { error: 'Failed to process image' },
      { status: 500 }
    );
  }
}
