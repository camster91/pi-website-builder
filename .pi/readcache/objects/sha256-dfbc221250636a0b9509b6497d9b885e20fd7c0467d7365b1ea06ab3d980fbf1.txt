// lib/design-styles.ts
// Curated design style library for AI website generation

export interface DesignStyle {
  id: string
  name: string
  description: string
  emoji: string
  tags: string[]
  industries: string[]
  inspirations: string[]
  tokens: {
    colors: {
      primary: string
      primaryDark: string
      secondary: string
      accent: string
      text: string
      textSecondary: string
      textMuted: string
      bg: string
      bgCard: string
      bgSection: string
      border: string
    }
    typography: {
      fontHeading: string
      fontBody: string
      headingWeight: string
      letterSpacing: string
    }
    shape: {
      borderRadius: string
      heroStyle: 'dark-gradient' | 'gradient-mesh' | 'split-screen' | 'minimal-centered' | 'editorial' | 'full-bleed'
      motifs: string[]
    }
    effects: {
      shadow: 'none' | 'subtle' | 'medium' | 'dramatic' | 'colored-glow'
      animation: 'none' | 'subtle-fade' | 'energetic' | 'morphing'
      glassmorphism: boolean
    }
  }
}

export const DESIGN_STYLES: DesignStyle[] = [
  {
    id: 'linear-dark',
    name: 'Linear Dark',
    description: 'Deep dark background with violet accents — the gold standard for modern SaaS products.',
    emoji: '🌌',
    tags: ['dark', 'minimal', 'SaaS', 'tech', 'elegant'],
    industries: ['saas', 'developer-tools', 'analytics', 'fintech', 'productivity'],
    inspirations: ['linear.app', 'vercel.com', 'planetscale.com'],
    tokens: {
      colors: {
        primary: '#5E6AD2',
        primaryDark: '#4A55C4',
        secondary: '#1A1A2E',
        accent: '#7C83E0',
        text: '#F2F2F7',
        textSecondary: '#A0A0B8',
        textMuted: '#5A5A72',
        bg: '#0D0D12',
        bgCard: '#16161F',
        bgSection: '#111118',
        border: '#252535',
      },
      typography: { fontHeading: 'Inter', fontBody: 'Inter', headingWeight: '700', letterSpacing: '-0.03em' },
      shape: { borderRadius: '8px', heroStyle: 'dark-gradient', motifs: ['floating-orbs', 'gradient-glow', 'grid-lines', 'glassmorphism'] },
      effects: { shadow: 'colored-glow', animation: 'subtle-fade', glassmorphism: true },
    },
  },
  {
    id: 'stripe-clean',
    name: 'Stripe Clean',
    description: 'Crisp white with indigo accents — authoritative, trustworthy, and conversion-focused enterprise SaaS.',
    emoji: '💳',
    tags: ['clean', 'enterprise', 'professional', 'white', 'SaaS'],
    industries: ['fintech', 'saas', 'payments', 'b2b', 'enterprise'],
    inspirations: ['stripe.com', 'clerk.com', 'resend.com'],
    tokens: {
      colors: {
        primary: '#635BFF',
        primaryDark: '#4F46E5',
        secondary: '#0A2540',
        accent: '#00D4FF',
        text: '#0A2540',
        textSecondary: '#425466',
        textMuted: '#8898AA',
        bg: '#FFFFFF',
        bgCard: '#F7FAFC',
        bgSection: '#F0F4F8',
        border: '#E3E8EF',
      },
      typography: { fontHeading: 'Sora', fontBody: 'Inter', headingWeight: '700', letterSpacing: '-0.02em' },
      shape: { borderRadius: '8px', heroStyle: 'gradient-mesh', motifs: ['mesh-gradient', 'subtle-pattern', 'card-stack'] },
      effects: { shadow: 'medium', animation: 'subtle-fade', glassmorphism: false },
    },
  },
  {
    id: 'vercel-minimal',
    name: 'Vercel Minimal',
    description: 'Pure black and white with surgical precision — maximum impact through radical simplicity.',
    emoji: '▲',
    tags: ['minimal', 'black-white', 'bold-type', 'tech', 'developer'],
    industries: ['developer-tools', 'agencies', 'portfolio', 'design-studio', 'consulting'],
    inspirations: ['vercel.com', 'nextjs.org', 'tailwindcss.com'],
    tokens: {
      colors: {
        primary: '#0070F3',
        primaryDark: '#0060D3',
        secondary: '#000000',
        accent: '#FF0080',
        text: '#000000',
        textSecondary: '#444444',
        textMuted: '#888888',
        bg: '#FFFFFF',
        bgCard: '#FAFAFA',
        bgSection: '#F3F3F3',
        border: '#EAEAEA',
      },
      typography: { fontHeading: 'Inter', fontBody: 'Inter', headingWeight: '800', letterSpacing: '-0.04em' },
      shape: { borderRadius: '4px', heroStyle: 'minimal-centered', motifs: ['bold-typography', 'white-space', 'code-blocks'] },
      effects: { shadow: 'subtle', animation: 'subtle-fade', glassmorphism: false },
    },
  },
  {
    id: 'framer-gradient',
    name: 'Framer Bold',
    description: 'Vivid gradients, experimental layouts, and kinetic energy for creative agencies and design tools.',
    emoji: '🎨',
    tags: ['gradient', 'bold', 'creative', 'colorful', 'experimental'],
    industries: ['design-tools', 'creative-agencies', 'motion', 'web-design', 'art-direction'],
    inspirations: ['framer.com', 'craft.do', 'www.flow.app'],
    tokens: {
      colors: {
        primary: '#0099FF',
        primaryDark: '#007FCC',
        secondary: '#FF3366',
        accent: '#FFD700',
        text: '#0A0A0A',
        textSecondary: '#3D3D3D',
        textMuted: '#888888',
        bg: '#FFFFFF',
        bgCard: '#F5F5FF',
        bgSection: '#FAFAFF',
        border: '#E5E5FF',
      },
      typography: { fontHeading: 'DM Sans', fontBody: 'DM Sans', headingWeight: '800', letterSpacing: '-0.03em' },
      shape: { borderRadius: '16px', heroStyle: 'gradient-mesh', motifs: ['mesh-gradient', 'geometric-shapes', 'blurred-blobs', 'neon-glow'] },
      effects: { shadow: 'colored-glow', animation: 'morphing', glassmorphism: true },
    },
  },
  {
    id: 'notion-editorial',
    name: 'Notion Editorial',
    description: 'Warm off-white with serif headings — thoughtful, readable, and built for content-first experiences.',
    emoji: '📝',
    tags: ['editorial', 'warm', 'serif', 'content', 'minimal'],
    industries: ['blogging', 'documentation', 'publishing', 'education', 'consulting'],
    inspirations: ['notion.so', 'substack.com', 'read.cv'],
    tokens: {
      colors: {
        primary: '#2383E2',
        primaryDark: '#1A6CBF',
        secondary: '#37352F',
        accent: '#EB5757',
        text: '#37352F',
        textSecondary: '#73726E',
        textMuted: '#9B9A97',
        bg: '#FFFEF8',
        bgCard: '#FFFFFF',
        bgSection: '#F7F6F3',
        border: '#E9E8E4',
      },
      typography: { fontHeading: 'Lora', fontBody: 'Inter', headingWeight: '700', letterSpacing: '-0.01em' },
      shape: { borderRadius: '4px', heroStyle: 'editorial', motifs: ['serif-headings', 'pull-quotes', 'line-dividers'] },
      effects: { shadow: 'subtle', animation: 'subtle-fade', glassmorphism: false },
    },
  },
  {
    id: 'warm-restaurant',
    name: 'Restaurant & Bistro',
    description: 'Deep burgundy and warm gold that makes every visitor hungry — for food-first hospitality brands.',
    emoji: '🍷',
    tags: ['warm', 'food', 'luxury', 'dark', 'sensory'],
    industries: ['restaurant', 'cafe', 'bar', 'food-delivery', 'catering'],
    inspirations: ['narisawa.com', 'carbone.nyc', 'locandagreen.com'],
    tokens: {
      colors: {
        primary: '#C8102E',
        primaryDark: '#A50D26',
        secondary: '#1A0A00',
        accent: '#D4AF37',
        text: '#FFF8F0',
        textSecondary: '#D4C4B0',
        textMuted: '#9A8870',
        bg: '#0F0700',
        bgCard: '#1C100A',
        bgSection: '#150D07',
        border: '#3A2818',
      },
      typography: { fontHeading: 'Cormorant Garamond', fontBody: 'Lato', headingWeight: '700', letterSpacing: '0.02em' },
      shape: { borderRadius: '2px', heroStyle: 'full-bleed', motifs: ['full-bleed-images', 'gold-accents', 'serif-luxury', 'warm-texture'] },
      effects: { shadow: 'dramatic', animation: 'subtle-fade', glassmorphism: false },
    },
  },
  {
    id: 'wellness-spa',
    name: 'Wellness & Spa',
    description: 'Soft blush and sage green that radiates calm — perfect for wellness, yoga, and health brands.',
    emoji: '🌿',
    tags: ['soft', 'calm', 'wellness', 'minimal', 'feminine'],
    industries: ['spa', 'yoga', 'meditation', 'health-coaching', 'beauty'],
    inspirations: ['gwyneth.com', 'goop.com', 'thespot.co'],
    tokens: {
      colors: {
        primary: '#9B8B7A',
        primaryDark: '#7D6E60',
        secondary: '#7A9B8B',
        accent: '#E8C4A0',
        text: '#3D2E24',
        textSecondary: '#6B5A52',
        textMuted: '#9B8B82',
        bg: '#FDF9F6',
        bgCard: '#FFFFFF',
        bgSection: '#F5EDE6',
        border: '#E8DDD7',
      },
      typography: { fontHeading: 'Playfair Display', fontBody: 'Nunito', headingWeight: '400', letterSpacing: '0.02em' },
      shape: { borderRadius: '24px', heroStyle: 'minimal-centered', motifs: ['organic-shapes', 'botanical-motifs', 'soft-gradients'] },
      effects: { shadow: 'subtle', animation: 'subtle-fade', glassmorphism: false },
    },
  },
  {
    id: 'coastal-fresh',
    name: 'Coastal Fresh',
    description: 'Ocean blues and bright white that brings a breath of fresh air to travel, food, and lifestyle brands.',
    emoji: '🌊',
    tags: ['fresh', 'blue', 'light', 'airy', 'coastal'],
    industries: ['travel', 'fresh-food', 'seafood', 'lifestyle', 'hospitality'],
    inspirations: ['sweetgreen.com', 'bluebottle.coffee', 'allbirds.com'],
    tokens: {
      colors: {
        primary: '#0D7CC4',
        primaryDark: '#0A64A0',
        secondary: '#004E7C',
        accent: '#FF7B4F',
        text: '#0A2A40',
        textSecondary: '#3A6070',
        textMuted: '#7FA0B0',
        bg: '#F8FBFF',
        bgCard: '#FFFFFF',
        bgSection: '#EBF4FA',
        border: '#C8DFF0',
      },
      typography: { fontHeading: 'Plus Jakarta Sans', fontBody: 'Inter', headingWeight: '700', letterSpacing: '-0.02em' },
      shape: { borderRadius: '12px', heroStyle: 'split-screen', motifs: ['wave-shapes', 'soft-gradients', 'photo-overlays'] },
      effects: { shadow: 'medium', animation: 'subtle-fade', glassmorphism: false },
    },
  },
  {
    id: 'earthy-organic',
    name: 'Earthy & Organic',
    description: 'Sage green and terracotta that signals authenticity — for sustainable, eco, and artisan brands.',
    emoji: '🌱',
    tags: ['earthy', 'organic', 'natural', 'sustainable', 'artisan'],
    industries: ['eco-brands', 'farm-to-table', 'organic-food', 'sustainable-fashion', 'natural-beauty'],
    inspirations: ['patagonia.com', 'oatly.com', 'earthhero.com'],
    tokens: {
      colors: {
        primary: '#5C7A4E',
        primaryDark: '#4A6240',
        secondary: '#C4694A',
        accent: '#D4A843',
        text: '#2A1F16',
        textSecondary: '#5A4A3A',
        textMuted: '#9A8A7A',
        bg: '#F7F4EF',
        bgCard: '#FFFFFF',
        bgSection: '#EDE8E0',
        border: '#D8CEC4',
      },
      typography: { fontHeading: 'Fraunces', fontBody: 'Nunito Sans', headingWeight: '600', letterSpacing: '0.01em' },
      shape: { borderRadius: '12px', heroStyle: 'split-screen', motifs: ['organic-blobs', 'botanical-textures', 'earthy-patterns'] },
      effects: { shadow: 'subtle', animation: 'subtle-fade', glassmorphism: false },
    },
  },
  {
    id: 'bold-playful',
    name: 'Bold & Playful',
    description: 'Bright coral and yellow with rounded curves — energetic and fun for lifestyle, kids, and D2C brands.',
    emoji: '🎉',
    tags: ['bold', 'colorful', 'playful', 'rounded', 'fun'],
    industries: ['d2c', 'kids-brands', 'lifestyle', 'food-delivery', 'events'],
    inspirations: ['mailchimp.com', 'duolingo.com', 'headspace.com'],
    tokens: {
      colors: {
        primary: '#FF5A36',
        primaryDark: '#E04520',
        secondary: '#FFD60A',
        accent: '#00C2CC',
        text: '#1A0F00',
        textSecondary: '#4A3A2A',
        textMuted: '#9A8A7A',
        bg: '#FFFCF7',
        bgCard: '#FFFFFF',
        bgSection: '#FFF6EC',
        border: '#FFE0CC',
      },
      typography: { fontHeading: 'Nunito', fontBody: 'Nunito', headingWeight: '800', letterSpacing: '-0.01em' },
      shape: { borderRadius: '16px', heroStyle: 'gradient-mesh', motifs: ['rounded-blobs', 'confetti-dots', 'wavy-lines'] },
      effects: { shadow: 'medium', animation: 'energetic', glassmorphism: false },
    },
  },
  {
    id: 'luxury-premium',
    name: 'Luxury & Premium',
    description: 'Black and champagne gold with refined serif headings — for brands that command premium prices.',
    emoji: '✨',
    tags: ['luxury', 'premium', 'dark', 'gold', 'exclusive'],
    industries: ['luxury-goods', 'jewelry', 'high-end-fashion', 'concierge', 'fine-dining'],
    inspirations: ['bottegaveneta.com', 'aesop.com', 'therow.com'],
    tokens: {
      colors: {
        primary: '#C9A84C',
        primaryDark: '#A88835',
        secondary: '#1A1208',
        accent: '#E8D08A',
        text: '#F8F4EC',
        textSecondary: '#C8B898',
        textMuted: '#786858',
        bg: '#0A0804',
        bgCard: '#140F08',
        bgSection: '#10090502',
        border: '#2E2010',
      },
      typography: { fontHeading: 'Cormorant Garamond', fontBody: 'Montserrat', headingWeight: '300', letterSpacing: '0.08em' },
      shape: { borderRadius: '2px', heroStyle: 'full-bleed', motifs: ['full-bleed-imagery', 'gold-lines', 'large-serif', 'minimal-luxury'] },
      effects: { shadow: 'dramatic', animation: 'subtle-fade', glassmorphism: false },
    },
  },
  {
    id: 'neo-brutalist',
    name: 'Neo-Brutalist',
    description: 'Black borders, vivid yellow, and raw typography — deliberately raw, unapologetically bold.',
    emoji: '🟨',
    tags: ['brutal', 'experimental', 'bold', 'yellow', 'black-borders'],
    industries: ['design-studios', 'art-galleries', 'experimental-startups', 'portfolio', 'culture-brands'],
    inspirations: ['gumroad.com', 'bear.app', 'cowboy.com'],
    tokens: {
      colors: {
        primary: '#FFE600',
        primaryDark: '#D4BF00',
        secondary: '#FF4400',
        accent: '#00D4FF',
        text: '#000000',
        textSecondary: '#222222',
        textMuted: '#555555',
        bg: '#FFFDE7',
        bgCard: '#FFFFFF',
        bgSection: '#FFF9C4',
        border: '#000000',
      },
      typography: { fontHeading: 'Space Grotesk', fontBody: 'Space Grotesk', headingWeight: '800', letterSpacing: '-0.02em' },
      shape: { borderRadius: '2px', heroStyle: 'editorial', motifs: ['thick-borders', 'box-shadows-offset', 'bold-type', 'raw-grid'] },
      effects: { shadow: 'dramatic', animation: 'energetic', glassmorphism: false },
    },
  },
  {
    id: 'fitness-athletic',
    name: 'Fitness & Athletic',
    description: 'Dark background with electric lime — high energy, results-focused, and built for movers.',
    emoji: '⚡',
    tags: ['dark', 'athletic', 'energy', 'neon', 'performance'],
    industries: ['gym', 'fitness-app', 'sports-brand', 'personal-trainer', 'nutrition'],
    inspirations: ['nike.com', 'whoop.com', 'future.co'],
    tokens: {
      colors: {
        primary: '#C8FF00',
        primaryDark: '#A8D800',
        secondary: '#FF3D00',
        accent: '#00E5FF',
        text: '#F4F4F4',
        textSecondary: '#A0A0A0',
        textMuted: '#606060',
        bg: '#080808',
        bgCard: '#121212',
        bgSection: '#0E0E0E',
        border: '#2A2A2A',
      },
      typography: { fontHeading: 'Bebas Neue', fontBody: 'Inter', headingWeight: '400', letterSpacing: '0.04em' },
      shape: { borderRadius: '4px', heroStyle: 'dark-gradient', motifs: ['diagonal-cuts', 'neon-glow', 'motion-blur', 'grid-overlay'] },
      effects: { shadow: 'colored-glow', animation: 'energetic', glassmorphism: false },
    },
  },
  {
    id: 'healthcare-clean',
    name: 'Healthcare Clean',
    description: 'Teal and white with soft curves — professional, trustworthy, and reassuring for medical brands.',
    emoji: '🏥',
    tags: ['medical', 'clean', 'trustworthy', 'teal', 'professional'],
    industries: ['medical-practice', 'dental', 'telehealth', 'pharmacy', 'health-tech'],
    inspirations: ['modernhealth.com', 'hims.com', 'ro.co'],
    tokens: {
      colors: {
        primary: '#0892A5',
        primaryDark: '#067380',
        secondary: '#005F73',
        accent: '#94D2BD',
        text: '#1A3340',
        textSecondary: '#3D6070',
        textMuted: '#7A9AA8',
        bg: '#F8FEFF',
        bgCard: '#FFFFFF',
        bgSection: '#EBF8F9',
        border: '#C0E4E8',
      },
      typography: { fontHeading: 'Plus Jakarta Sans', fontBody: 'Inter', headingWeight: '700', letterSpacing: '-0.01em' },
      shape: { borderRadius: '12px', heroStyle: 'split-screen', motifs: ['soft-blobs', 'medical-icons', 'clean-whitespace'] },
      effects: { shadow: 'medium', animation: 'subtle-fade', glassmorphism: false },
    },
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Slate blue and warm gray — polished and professional for property, architecture, and investment.',
    emoji: '🏡',
    tags: ['professional', 'clean', 'slate', 'property', 'architecture'],
    industries: ['real-estate-agency', 'property-management', 'architecture', 'interior-design', 'construction'],
    inspirations: ['compass.com', 'opendoor.com', 'luxuryportfolio.com'],
    tokens: {
      colors: {
        primary: '#2E5BFF',
        primaryDark: '#1A48E8',
        secondary: '#1C2B4A',
        accent: '#E8B84B',
        text: '#1C2B4A',
        textSecondary: '#4A5B7A',
        textMuted: '#8090AA',
        bg: '#F8F9FC',
        bgCard: '#FFFFFF',
        bgSection: '#EEF2F8',
        border: '#D8DFF0',
      },
      typography: { fontHeading: 'Libre Baskerville', fontBody: 'Source Sans 3', headingWeight: '700', letterSpacing: '-0.01em' },
      shape: { borderRadius: '8px', heroStyle: 'split-screen', motifs: ['architectural-lines', 'property-photography', 'map-integration'] },
      effects: { shadow: 'medium', animation: 'subtle-fade', glassmorphism: false },
    },
  },
  {
    id: 'creative-portfolio',
    name: 'Creative Portfolio',
    description: 'White space, large serif headings, and a single accent — letting the work do the talking.',
    emoji: '🖼️',
    tags: ['portfolio', 'minimal', 'serif', 'art', 'white-space'],
    industries: ['photographer', 'designer', 'illustrator', 'art-director', 'filmmaker'],
    inspirations: ['awwwards.com', 'pierrefarraridesign.com', 'linusrogge.com'],
    tokens: {
      colors: {
        primary: '#0A0A0A',
        primaryDark: '#000000',
        secondary: '#FF4A1C',
        accent: '#FF4A1C',
        text: '#0A0A0A',
        textSecondary: '#4A4A4A',
        textMuted: '#9A9A9A',
        bg: '#FFFFFF',
        bgCard: '#FAFAFA',
        bgSection: '#F5F5F5',
        border: '#EBEBEB',
      },
      typography: { fontHeading: 'Playfair Display', fontBody: 'Inter', headingWeight: '900', letterSpacing: '-0.03em' },
      shape: { borderRadius: '2px', heroStyle: 'editorial', motifs: ['large-typography', 'grid-masonry', 'full-bleed-images', 'hover-reveals'] },
      effects: { shadow: 'none', animation: 'subtle-fade', glassmorphism: false },
    },
  },
  {
    id: 'corporate-trust',
    name: 'Corporate Trust',
    description: 'Navy and gold — the classic combination that signals authority, longevity, and professional excellence.',
    emoji: '⚖️',
    tags: ['corporate', 'navy', 'gold', 'trustworthy', 'established'],
    industries: ['law-firm', 'financial-services', 'insurance', 'accounting', 'consulting'],
    inspirations: ['weil.com', 'morganstanley.com', 'pwc.com'],
    tokens: {
      colors: {
        primary: '#1B3A6B',
        primaryDark: '#122850',
        secondary: '#C9A84C',
        accent: '#D4AF37',
        text: '#0F2040',
        textSecondary: '#3A5070',
        textMuted: '#7A90A8',
        bg: '#FFFFFF',
        bgCard: '#F8F9FC',
        bgSection: '#EDF0F7',
        border: '#D0D8E8',
      },
      typography: { fontHeading: 'Libre Baskerville', fontBody: 'Source Sans 3', headingWeight: '700', letterSpacing: '0.01em' },
      shape: { borderRadius: '4px', heroStyle: 'split-screen', motifs: ['classical-lines', 'gold-dividers', 'formal-layout'] },
      effects: { shadow: 'subtle', animation: 'none', glassmorphism: false },
    },
  },
  {
    id: 'education-bright',
    name: 'Education Bright',
    description: 'Sky blue and energetic orange — approachable and motivating for learning platforms and schools.',
    emoji: '🎓',
    tags: ['education', 'bright', 'blue', 'orange', 'approachable'],
    industries: ['e-learning', 'school', 'tutoring', 'online-courses', 'edtech'],
    inspirations: ['coursera.org', 'duolingo.com', 'khanacademy.org'],
    tokens: {
      colors: {
        primary: '#2563EB',
        primaryDark: '#1D4ED8',
        secondary: '#F97316',
        accent: '#FBBF24',
        text: '#1E3A5F',
        textSecondary: '#3A5A80',
        textMuted: '#7A96B0',
        bg: '#F0F7FF',
        bgCard: '#FFFFFF',
        bgSection: '#E0EDFF',
        border: '#C0D8F0',
      },
      typography: { fontHeading: 'Nunito', fontBody: 'Nunito Sans', headingWeight: '800', letterSpacing: '-0.01em' },
      shape: { borderRadius: '16px', heroStyle: 'gradient-mesh', motifs: ['soft-illustrations', 'progress-indicators', 'bright-blobs'] },
      effects: { shadow: 'medium', animation: 'subtle-fade', glassmorphism: false },
    },
  },
  {
    id: 'community-warm',
    name: 'Community Warm',
    description: 'Warm amber and rich brown — inviting and human for nonprofits, local businesses, and community brands.',
    emoji: '🤝',
    tags: ['warm', 'community', 'amber', 'local', 'human'],
    industries: ['nonprofit', 'local-business', 'community', 'church', 'local-service'],
    inspirations: ['charity:water.com', 'toms.com', 'kiva.org'],
    tokens: {
      colors: {
        primary: '#D97706',
        primaryDark: '#B45309',
        secondary: '#44291A',
        accent: '#F59E0B',
        text: '#292015',
        textSecondary: '#5C4A35',
        textMuted: '#9A8A70',
        bg: '#FFFBF5',
        bgCard: '#FFFFFF',
        bgSection: '#FEF3E2',
        border: '#F0D8B0',
      },
      typography: { fontHeading: 'Merriweather', fontBody: 'Lato', headingWeight: '700', letterSpacing: '0.01em' },
      shape: { borderRadius: '12px', heroStyle: 'split-screen', motifs: ['human-photography', 'warm-gradients', 'handwritten-accents'] },
      effects: { shadow: 'medium', animation: 'subtle-fade', glassmorphism: false },
    },
  },
  {
    id: 'bento-modern',
    name: 'Bento Modern',
    description: 'Bento-grid layouts with purple and black — the cutting-edge startup aesthetic that breaks all conventions.',
    emoji: '🍱',
    tags: ['bento-grid', 'modern', 'purple', 'startup', 'grid-breaking'],
    industries: ['saas', 'ai-startup', 'consumer-app', 'productivity', 'developer-tools'],
    inspirations: ['raycast.com', 'basement.studio', 'arc.net'],
    tokens: {
      colors: {
        primary: '#8B5CF6',
        primaryDark: '#7C3AED',
        secondary: '#EC4899',
        accent: '#34D399',
        text: '#F0EFFF',
        textSecondary: '#A0A0C0',
        textMuted: '#5A5A80',
        bg: '#060610',
        bgCard: '#0E0E20',
        bgSection: '#0A0A1A',
        border: '#1E1E3A',
      },
      typography: { fontHeading: 'Space Grotesk', fontBody: 'Inter', headingWeight: '700', letterSpacing: '-0.03em' },
      shape: { borderRadius: '16px', heroStyle: 'dark-gradient', motifs: ['bento-grid', 'gradient-borders', 'glass-cards', 'neon-accents'] },
      effects: { shadow: 'colored-glow', animation: 'morphing', glassmorphism: true },
    },
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getStyleById(id: string): DesignStyle | undefined {
  return DESIGN_STYLES.find((s) => s.id === id)
}

export function getStylesForIndustry(industry: string): DesignStyle[] {
  const normalized = industry.toLowerCase().replace(/\s+/g, '-')
  return DESIGN_STYLES.filter((s) => s.industries.some((i) => i.includes(normalized) || normalized.includes(i)))
}

export function getSuggestedStyles(prompt: string): DesignStyle[] {
  const lower = prompt.toLowerCase()
  const keywords: Record<string, string[]> = {
    restaurant: ['restaurant', 'cafe', 'food', 'dining', 'bistro', 'bar', 'pizza', 'burger', 'menu'],
    wellness: ['spa', 'yoga', 'wellness', 'meditation', 'health coach', 'retreat', 'holistic'],
    saas: ['saas', 'software', 'platform', 'app', 'dashboard', 'analytics', 'tool', 'api'],
    portfolio: ['portfolio', 'photographer', 'designer', 'artist', 'creative', 'illustrator'],
    fitness: ['gym', 'fitness', 'training', 'workout', 'sports', 'athletic', 'personal trainer'],
    luxury: ['luxury', 'premium', 'exclusive', 'high-end', 'bespoke', 'fine', 'elite'],
    medical: ['doctor', 'dental', 'medical', 'clinic', 'health', 'therapy', 'care'],
    education: ['school', 'course', 'education', 'learning', 'tutoring', 'academy', 'training'],
    corporate: ['law', 'finance', 'legal', 'accounting', 'insurance', 'consulting', 'advisory'],
    organic: ['organic', 'sustainable', 'eco', 'natural', 'green', 'farm', 'artisan'],
  }
  
  const scores: Map<string, number> = new Map()
  for (const [industry, kws] of Object.entries(keywords)) {
    for (const kw of kws) {
      if (lower.includes(kw)) {
        const styles = getStylesForIndustry(industry)
        styles.forEach((s) => scores.set(s.id, (scores.get(s.id) ?? 0) + 1))
      }
    }
  }
  
  const sorted = DESIGN_STYLES.filter((s) => scores.has(s.id))
    .sort((a, b) => (scores.get(b.id) ?? 0) - (scores.get(a.id) ?? 0))
  
  // Return top 3, or default suggestions if nothing matched
  return sorted.slice(0, 3).length >= 1
    ? sorted.slice(0, 3)
    : [DESIGN_STYLES[0], DESIGN_STYLES[1], DESIGN_STYLES[4]]
}

// Industry filter groups for the UI
export const INDUSTRY_FILTERS = [
  { label: 'All', value: '' },
  { label: 'SaaS & Tech', value: 'saas' },
  { label: 'Restaurant & Food', value: 'restaurant' },
  { label: 'Creative & Portfolio', value: 'portfolio' },
  { label: 'Health & Wellness', value: 'health' },
  { label: 'Local Services', value: 'local' },
  { label: 'Fitness & Sports', value: 'fitness' },
  { label: 'Fashion & Luxury', value: 'luxury' },
  { label: 'Education', value: 'education' },
  { label: 'Corporate & Finance', value: 'finance' },
]
