# 🚀 Pi AI Website Builder SaaS

A multi-tenant AI-powered website builder that generates complete, production-ready websites from natural language prompts using the Gemini API.

## Features Implemented

### ✅ Phase 1: Core Infrastructure
- **Next.js 16** (App Router) with TypeScript and Tailwind CSS
- **Authentication** with NextAuth.js (Google OAuth) and Prisma adapter
- **Database** schema with SQLite (PostgreSQL ready)
- **User models**: User, Account, Session, Subscription, Project, File, Pin, TokenTransaction
- **State management** with Zustand (ready for complex UI state)
- **Stripe integration** setup for billing and credit management

### ✅ Phase 2: Multi-Agent AI Pipeline
- **Gemini AI integration** with Google Generative AI SDK
- **Three-agent architecture**:
  1. **Planner** (Gemini Pro): Creates detailed JSON website plans
  2. **Coder** (Gemini Flash): Generates HTML/CSS/JavaScript code
  3. **QA & Marketer** (Gemini Pro): Reviews code and optimizes content
- **Token tracking** and credit management system

### ✅ Phase 3: Core Features
- **Interactive dashboard** with project management
- **Website creation** with prompt-based generation
- **Credit system** with transaction history
- **Project preview** and file management
- **Responsive UI** with modern design

### 🚧 Remaining Implementation

#### Phase 4: Infrastructure & Security
- [ ] Docker container orchestration for user websites
- [ ] Traefik reverse proxy configuration
- [ ] Nginx Alpine container templates
- [ ] Volume mounting for user files
- [ ] Automatic SSL with Let's Encrypt

#### Phase 5: Advanced Features
- [ ] Interactive pin-based editing UI
- [ ] Real-time preview with iframe communication
- [ ] ZIP export functionality
- [ ] Custom domain support
- [ ] Team collaboration features
- [ ] Template library

#### Phase 6: Deployment
- [ ] VPS setup scripts
- [ ] Docker Compose for production
- [ ] Environment variable management
- [ ] Monitoring and logging
- [ ] Backup and recovery

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn
- Google OAuth credentials (for authentication)
- Gemini API key (for AI generation)
- Stripe account (for billing)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pi-website-builder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your credentials
   ```

4. Set up the database:
   ```bash
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open http://localhost:3000 in your browser.

### Project Structure

```
pi-website-builder/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
├── lib/                   # Shared utilities
│   ├── auth.ts           # NextAuth configuration
│   ├── gemini.ts         # Gemini AI integration
│   ├── prisma.ts         # Database client
│   └── stripe.ts         # Stripe integration
├── prisma/                # Database schema
├── services/              # Microservices (planned)
└── public/                # Static assets
```

## API Endpoints

- `POST /api/generate` - Generate a website from a prompt
- `GET /api/auth/[...nextauth]` - Authentication routes
- `GET /api/billing/*` - Billing and subscription management

## AI Pipeline Workflow

1. **User submits prompt** through the dashboard
2. **Credit check** validates user has sufficient credits
3. **Planner agent** analyzes prompt and creates detailed JSON plan
4. **Coder agent** generates HTML/CSS/JavaScript based on plan
5. **QA agent** reviews code, improves accessibility and SEO
6. **Files are saved** to database and project is created
7. **Credits are deducted** from user's balance
8. **Project is returned** to user for editing and deployment

## Database Schema

Key models:
- **User**: User accounts with credit balances
- **Project**: Generated websites with status and metadata
- **File**: HTML/CSS/JS files for each project
- **Pin**: User comments on specific website elements
- **TokenTransaction**: Credit purchases and usage history
- **Subscription**: Recurring subscription plans

## Development Roadmap

### Week 1-2: MVP Completion
- [ ] Docker orchestration for user websites
- [ ] Basic website preview functionality
- [ ] ZIP export feature
- [ ] Pin-based commenting system

### Week 3-4: Advanced Features
- [ ] Custom domain support
- [ ] Template library
- [ ] Team collaboration
- [ ] Analytics dashboard

### Week 5-6: Scalability & Polish
- [ ] Performance optimization
- [ ] Advanced caching
- [ ] Internationalization
- [ ] Documentation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

Proprietary - All rights reserved.

---

**Built with**: Next.js, React, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Docker, Gemini AI, Stripe