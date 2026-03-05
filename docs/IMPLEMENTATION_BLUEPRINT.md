# 🚀 "Pi" AI Website Builder SaaS: Complete Implementation Blueprint

## Executive Summary

**Pi** is a multi-tenant AI-powered website builder that generates complete, production-ready websites from natural language prompts using the Gemini API. The system combines modern web technologies with containerized infrastructure to provide secure, scalable website generation and hosting on a VPS.

**Core Value Proposition**: Turn any idea into a fully functional website in minutes with AI-generated code, visual pin-based editing, and one-click deployment—all while maintaining full control over monetization and infrastructure.

---

## Phase 1: The 2026 Tech Stack

### Frontend (Builder App)
- **Next.js 15** (App Router) – Server-side rendering, API routes, and marketing pages
- **React 19** – Concurrent features and improved performance
- **Tailwind CSS** – Utility-first CSS for rapid styling
- **Zustand** – Lightweight state management for complex UI state
- **shadcn/ui** – Accessible component library built on Radix UI

### Backend & API
- **Node.js 20+** with **Express** – Dedicated microservice for Docker orchestration
- **Next.js Server Actions** – Authentication, billing, and database operations
- **Google Generative AI SDK** – Gemini API integration
- **LangGraph** (JavaScript) – Multi-agent orchestration pipeline

### Database & ORM
- **PostgreSQL 16** – Relational data with strict schema
- **Prisma ORM** – Type-safe database client with migrations
- **Redis** – Caching and real-time features

### Infrastructure
- **Docker** – Containerization for user websites and services
- **Traefik** – Dynamic reverse proxy with automatic SSL
- **Nginx (Alpine)** – Lightweight web server for user containers
- **VPS** (DigitalOcean, Hetzner, or AWS EC2) – 4GB RAM minimum

### Billing & Monetization
- **Stripe** – Subscription management and metered billing
- **Stripe Webhooks** – Real-time credit updates

### AI Pipeline
- **Gemini 2.5 Pro** – High-intelligence planning and QA
- **Gemini 2.5 Flash** – Fast, cost-effective coding
- **Custom Orchestrator** – Agent coordination and token management

---

## Phase 2: The "Pi" Multi-Agent Pipeline

### Pipeline Architecture

```
User Prompt → Orchestrator → Planner (Gemini Pro) → Coder (Gemini Flash) → QA (Gemini Pro) → Deployer
```

### Agent Responsibilities

#### 1. **The Orchestrator** (Backend API)
- Validates user authentication and token balance
- Parses prompt for business type, location, and requirements
- Routes to appropriate agents with context
- Tracks token usage and deducts credits

#### 2. **The Planner** (Gemini Pro - High Intelligence)
**Input**: User prompt + business context
**Output**: JSON schema containing:
```json
{
  "websiteStructure": {
    "pages": ["home", "about", "services", "contact"],
    "navigation": { "primary": [...], "footer": [...] }
  },
  "designSystem": {
    "colorPalette": { "primary": "#0066cc", "secondary": "#ff6600" },
    "typography": { "heading": "Inter", "body": "Roboto" },
    "spacingScale": "1rem"
  },
  "seoStrategy": {
    "keywords": ["plumbing toronto", "emergency plumber"],
    "metaDescriptions": { "home": "..." },
    "schemaMarkup": "LocalBusiness"
  },
  "conversionFunnel": {
    "primaryCTA": "Book Free Consultation",
    "leadMagnets": ["Free Quote Form"],
    "contactMethods": ["phone", "contact form"]
  }
}
```

#### 3. **The Coder** (Gemini Flash - Fast & Cheap)
**Input**: Planner JSON schema
**Output**: Complete HTML/CSS/JS code for each page using:
- **Tailwind CSS** for styling
- **Alpine.js** for interactivity (lightweight, no framework)
- **Responsive design** (mobile-first)
- **Accessibility** (ARIA labels, semantic HTML)

#### 4. **The QA & Marketer** (Gemini Pro - High Intelligence)
**Input**: Coder's output + Planner schema
**Output**: Finalized code with:
- Responsive design fixes
- Accessibility improvements
- SEO-optimized, human-sounding copy
- Performance optimizations (image sizing, lazy loading)
- Cross-browser compatibility fixes

#### 5. **The Deployer**
- Saves final code to database/storage
- Creates/updates Docker container for the user
- Updates Traefik routing configuration
- Returns live URL to user

---

## Phase 3: Core Features & Implementation Strategy

### 1. The Interactive "Pin" UI

#### Technical Implementation

**Frontend Components**:
```typescript
// components/WebsitePreview.tsx
"use client";
import { useState, useEffect } from 'react';

interface Pin {
  id: string;
  x: number;
  y: number;
  elementXPath: string;
  comment: string;
  status: 'pending' | 'resolved';
}
```

**Iframe Communication**:
```javascript
// public/iframe-listener.js (injected into user sites)
window.addEventListener('click', (event) => {
  event.stopPropagation();
  const element = event.target;
  const xPath = getXPath(element);
  
  window.parent.postMessage({
    type: 'ELEMENT_CLICK',
    payload: {
      xPath,
      textContent: element.textContent,
      tagName: element.tagName,
      rect: element.getBoundingClientRect()
    }
  }, '*');
});

function getXPath(element) {
  // Generate unique XPath for precise element targeting
}
```

**Backend Processing**:
- Store pin comments with XPath references
- When user submits feedback: `"Make this button red"`
- Pass to AI with context: `"Element ${xPath}: ${comment}"`
- AI generates targeted CSS/HTML changes
- Apply changes to codebase and redeploy

### 2. Token Monetization & Billing

#### Database Schema
```prisma
model User {
  id            String   @id @default(cuid())
  email         String   @unique
  credits       Int      @default(0)
  subscription  Subscription?
  projects      Project[]
  createdAt     DateTime @default(now())
}

model TokenTransaction {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  amount    Int      // Positive for purchases, negative for usage
  type      TransactionType // PURCHASE, WEBSITE_GENERATION, EDIT
  metadata  Json?    // { geminiTokens: 1500, prompt: "...", projectId: "..." }
  createdAt DateTime @default(now())
}
```

#### Credit Calculation
```
1 Gemini token ≈ 0.1 Pi Credits (adjustable via admin)
User buys 10,000 credits for $10 → 1 credit = $0.001

Typical website generation:
- Planner: 500 Gemini tokens (50 credits)
- Coder: 2,000 Gemini tokens (200 credits)
- QA: 750 Gemini tokens (75 credits)
Total: 325 credits ≈ $0.325 per website
```

#### Stripe Integration
```typescript
// app/api/stripe/webhook/route.ts
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
  const sig = req.headers.get('stripe-signature');
  const event = stripe.webhooks.constructEvent(await req.text(), sig, process.env.STRIPE_WEBHOOK_SECRET);

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId = session.metadata.userId;
    const credits = session.metadata.credits;
    
    await prisma.user.update({
      where: { id: userId },
      data: { credits: { increment: credits } }
    });
  }
}
```

### 3. ZIP Export & "Locking"

#### Export Implementation
```typescript
// app/api/projects/[id]/export/route.ts
import JSZip from 'jszip';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const project = await prisma.project.findUnique({
    where: { id: params.id },
    include: { files: true }
  });

  const zip = new JSZip();
  
  project.files.forEach(file => {
    zip.file(file.path, file.content);
  });

  const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });
  
  return new Response(zipBuffer, {
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="${project.name}.zip"`
    }
  });
}
```

#### The "Lock" Strategy
- Export clean, standard HTML/CSS/JS
- No proprietary runtime or framework required
- If users edit HTML manually, they cannot re-import into Pi
- Reason: Pi's visual editor relies on internal state tree mapping
- Alternative: Provide "Re-import" feature that parses HTML and attempts to reconstruct state (advanced feature)

---

## Phase 4: Infrastructure & Security

### Docker Sandboxing Architecture

```
/var/www/pi/
├── users/
│   ├── user-1/
│   │   ├── project-a/
│   │   │   ├── index.html
│   │   │   ├── styles.css
│   │   │   └── assets/
│   │   └── project-b/
│   └── user-2/
├── docker-compose.yml
└── traefik/
    └── traefik.yml
```

### Docker Compose Configuration
```yaml
# docker-compose.yml
version: '3.8'

services:
  traefik:
    image: traefik:v3.0
    command:
      - "--api.dashboard=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.myresolver.acme.tlschallenge=true"
      - "--certificatesresolvers.myresolver.acme.email=admin@yourdomain.com"
      - "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "./traefik/letsencrypt:/letsencrypt"
    networks:
      - web

  nginx-user-1-project-a:
    image: nginx:alpine
    volumes:
      - "./users/user-1/project-a:/usr/share/nginx/html:ro"
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.user-1-project-a.rule=Host(`user1-project-a.yourbuilder.com`)"
      - "traefik.http.routers.user-1-project-a.entrypoints=websecure"
      - "traefik.http.routers.user-1-project-a.tls.certresolver=myresolver"
    networks:
      - web

networks:
  web:
    external: false
```

### Security Measures

1. **API Key Protection**
   - Gemini API keys only in backend `.env`
   - Frontend never sees raw keys
   - Rate limiting per user

2. **Container Isolation**
   - Each user project in separate container
   - Read-only volume mounts
   - Resource limits (CPU, memory)

3. **Traefik Security**
   - Automatic HTTPS via Let's Encrypt
   - Basic authentication for admin routes
   - Rate limiting middleware

4. **Database Security**
   - Row Level Security (RLS) patterns
   - Prepared statements via Prisma
   - Regular backups

---

## Phase 5: AI Coding Plan (Implementation Steps)

### Step 1: Scaffolding & Database

**AI Prompt**: "Initialize a Next.js App Router project with TypeScript, Tailwind CSS, and Zustand. Create a Prisma schema for a SaaS app with User, Project, Subscription, and TokenTransaction models. Include NextAuth for authentication with Google OAuth."

**Expected Output**:
```
pi-website-builder/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/
│   │   ├── webhooks/
│   │   └── ai/
│   ├── dashboard/
│   ├── auth/
│   └── layout.tsx
├── components/
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   └── stripe.ts
├── prisma/
│   └── schema.prisma
└── package.json
```

**Prisma Schema**:
```prisma
model User {
  id            String   @id @default(cuid())
  email         String   @unique
  name          String?
  image         String?
  credits       Int      @default(0)
  subscription  Subscription?
  projects      Project[]
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

model Project {
  id          String   @id @default(cuid())
  name        String
  description String?
  status      ProjectStatus @default(DRAFT)
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  files       File[]
  subdomain   String?  @unique
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model File {
  id        String   @id @default(cuid())
  name      String
  path      String   // "index.html", "css/styles.css"
  content   String
  projectId String
  project   Project  @relation(fields: [projectId], references: [id])
}

enum ProjectStatus {
  DRAFT
  GENERATING
  LIVE
  ARCHIVED
}
```

### Step 2: The AI Middleware

**AI Prompt**: "Create a Node.js Express service that takes a prompt, checks a user's token balance in Prisma, makes a call to the Gemini API using the official Google Gen AI SDK, and deducts the used tokens from the user's balance. Include error handling for insufficient balance."

**Expected Output**:
```typescript
// services/ai-orchestrator/src/index.ts
import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

app.post('/generate', async (req, res) => {
  const { userId, prompt } = req.body;
  
  // Check balance
  const user = await prisma.user.findUnique({ where: { id: userId } });
  const estimatedCost = 100; // Credits
  if (user.credits < estimatedCost) {
    return res.status(402).json({ error: 'Insufficient credits' });
  }
  
  // Generate with Gemini
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });
  const result = await model.generateContent(prompt);
  const generatedText = result.response.text();
  
  // Calculate actual cost
  const usageMetadata = result.response.usageMetadata;
  const geminiTokens = usageMetadata?.totalTokens || 1000;
  const piCredits = Math.ceil(geminiTokens * 0.1); // Conversion rate
  
  // Deduct credits
  await prisma.user.update({
    where: { id: userId },
    data: { credits: { decrement: piCredits } }
  });
  
  // Log transaction
  await prisma.tokenTransaction.create({
    data: {
      userId,
      amount: -piCredits,
      type: 'WEBSITE_GENERATION',
      metadata: { geminiTokens, prompt }
    }
  });
  
  res.json({ content: generatedText, creditsUsed: piCredits });
});
```

### Step 3: The Builder UI & Iframe

**AI Prompt**: "Build a Next.js layout with a sidebar for chat and a main area containing an iframe. Write a JavaScript snippet to inject into the iframe that detects clicks on DOM elements, highlights them with a blue border, and sends the element's ID and text content to the parent window using postMessage. Include a pin management system in the sidebar."

**Expected Output**:
```tsx
// app/dashboard/editor/[id]/page.tsx
'use client';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';

export default function EditorPage() {
  const params = useParams();
  const [pins, setPins] = useState<Pin[]>([]);
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);
  
  const handleIframeMessage = useCallback((event: MessageEvent) => {
    if (event.data.type === 'ELEMENT_CLICK') {
      setSelectedElement(event.data.payload);
    }
  }, []);
  
  useEffect(() => {
    window.addEventListener('message', handleIframeMessage);
    return () => window.removeEventListener('message', handleIframeMessage);
  }, [handleIframeMessage]);
  
  const addPin = () => {
    if (!selectedElement) return;
    
    setPins([...pins, {
      id: Date.now().toString(),
      xPath: selectedElement.xPath,
      comment: '',
      status: 'pending'
    }]);
  };
  
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-80 border-r p-4">
        <h2 className="text-lg font-semibold mb-4">Feedback Pins</h2>
        {selectedElement && (
          <div className="mb-4 p-3 border rounded">
            <p className="text-sm">Selected: {selectedElement.tagName}</p>
            <button onClick={addPin} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded">
              Add Pin
            </button>
          </div>
        )}
        {/* Pin list */}
      </div>
      
      {/* Main area */}
      <div className="flex-1 relative">
        <iframe
          src={`/api/preview/${params.id}`}
          className="w-full h-full border-0"
          title="Website preview"
        />
      </div>
    </div>
  );
}
```

### Step 4: The Zip Exporter

**AI Prompt**: "Write a Next.js API route that uses the jszip library. It should take an array of file objects (filename and string content), generate a ZIP file in memory, and return it to the client as a downloadable blob. Include proper error handling and MIME types."

**Expected Output**:
```typescript
// app/api/projects/[id]/export/route.ts
import { NextRequest, NextResponse } from 'next/server';
import JSZip from 'jszip';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const project = await prisma.project.findUnique({
      where: { id: params.id },
      include: { files: true }
    });

    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    const zip = new JSZip();
    
    // Add all files to zip
    project.files.forEach(file => {
      zip.file(file.path, file.content);
    });
    
    // Generate zip as buffer
    const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });
    
    // Create response with proper headers
    const response = new NextResponse(zipBuffer, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${project.name.replace(/[^a-z0-9]/gi, '-')}.zip"`,
        'Content-Length': zipBuffer.length.toString(),
      },
    });
    
    return response;
  } catch (error) {
    console.error('Export error:', error);
    return NextResponse.json(
      { error: 'Failed to export project' },
      { status: 500 }
    );
  }
}
```

### Step 5: Docker Automation (Advanced)

**AI Prompt**: "Write a Node.js script using the dockerode library. It should take a folder path and a subdomain name, and spin up an Nginx Docker container that serves the files in that folder, applying Traefik labels for the given subdomain. Include error handling for existing containers and cleanup."

**Expected Output**:
```javascript
// scripts/deploy-container.js
import Docker from 'dockerode';
import fs from 'fs/promises';
import path from 'path';

const docker = new Docker();

export async function deploySite(projectId, subdomain, sourcePath) {
  const containerName = `pi-${projectId}`;
  
  // Remove existing container if it exists
  try {
    const oldContainer = docker.getContainer(containerName);
    await oldContainer.stop();
    await oldContainer.remove();
  } catch (err) {
    // Container doesn't exist, that's fine
  }
  
  // Create container
  const container = await docker.createContainer({
    Image: 'nginx:alpine',
    name: containerName,
    HostConfig: {
      Binds: [`${path.resolve(sourcePath)}:/usr/share/nginx/html:ro`],
      PortBindings: { '80/tcp': [] } // No external ports, Traefik handles routing
    },
    Labels: {
      'traefik.enable': 'true',
      [`traefik.http.routers.${containerName}.rule`]: `Host(\`${subdomain}.yourbuilder.com\`)`,
      [`traefik.http.routers.${containerName}.entrypoints`]: 'websecure',
      [`traefik.http.routers.${containerName}.tls.certresolver`]: 'myresolver',
      'traefik.docker.network': 'pi_web'
    },
    NetworkingConfig: {
      EndpointsConfig: {
        'pi_web': {
          Aliases: [containerName]
        }
      }
    }
  });
  
  await container.start();
  
  // Connect to network
  const network = docker.getNetwork('pi_web');
  await network.connect({ Container: container.id });
  
  return { success: true, containerId: container.id };
}
```

---

## Phase 6: Deployment & Operations

### VPS Setup Checklist

1. **Initial Server Setup**
   ```bash
   # Ubuntu 22.04 LTS
   apt update && apt upgrade -y
   apt install -y docker.io docker-compose npm nodejs postgresql redis
   ```

2. **Docker Network Creation**
   ```bash
   docker network create pi_web
   ```

3. **Environment Variables**
   ```env
   # .env.production
   DATABASE_URL="postgresql://user:password@localhost:5432/pi"
   GEMINI_API_KEY="your-gemini-key"
   STRIPE_SECRET_KEY="sk_live_..."
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="https://yourbuilder.com"
   ```

4. **Database Setup**
   ```bash
   npx prisma migrate deploy
   npx prisma generate
   ```

5. **Start Services**
   ```bash
   # Start Traefik and base services
   docker-compose up -d traefik postgres redis
   
   # Build and start Next.js app
   npm run build
   pm2 start npm --name "pi-builder" -- start
   ```

### Monitoring & Maintenance

1. **Logging**: Use `docker logs` and `pm2 logs`
2. **Backups**: Daily database dumps to cloud storage
3. **Updates**: Weekly security updates, monthly feature updates
4. **Scaling**: Horizontal scaling with load balancer for multiple VPS instances

---

## Phase 7: Go-to-Market Strategy

### Pricing Tiers

| Tier | Price/Month | Credits | Features |
|------|------------|---------|----------|
| **Starter** | $9 | 1,000 | 3 websites, basic templates |
| **Pro** | $29 | 5,000 | Unlimited websites, custom domains |
| **Agency** | $99 | 25,000 | Team collaboration, white-label |

### Marketing Channels
1. **Content Marketing**: Blog posts on AI website generation
2. **Product Hunt**: Launch with special early-bird pricing
3. **Partnerships**: Web design agencies, freelancers
4. **Referral Program**: 20% commission for referred customers

### Development Timeline
- **Week 1-2**: Scaffolding & basic AI integration
- **Week 3-4**: Builder UI with iframe preview
- **Week 5-6**: Docker deployment pipeline
- **Week 7-8**: Billing & user management
- **Week 9-10**: Testing & bug fixes
- **Week 11-12**: Beta launch & feedback collection

---

## Conclusion

The "Pi" AI Website Builder represents a complete, production-ready SaaS that leverages modern AI capabilities with robust infrastructure. By following this blueprint, you can build a scalable, profitable business that democratizes website creation while maintaining full control over the technology stack and monetization.

**Key Success Factors**:
1. **Quality AI Output**: Continually refine prompts and agent coordination
2. **User Experience**: Make the pin-based editing intuitive and powerful
3. **Reliability**: Ensure 99.9% uptime for user websites
4. **Monetization**: Balance credit pricing with user value

**Next Steps**: Begin with Phase 1, scaffolding the Next.js application and PostgreSQL database, then progressively implement each component following the AI prompts provided.

---

*Last Updated: March 5, 2026*  
*Version: 1.0*  
*Author: Pi Coding Agent*
