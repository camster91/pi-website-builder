# Pi Website Builder - Coolify Deployment

## ✅ Deployment Status

**Application Created Successfully!**

- **UUID**: `o4o04s84gcck48ckww8888c4`
- **Temporary URL**: http://o4o04s84gcck48ckww8888c4.187.77.26.99.sslip.io
- **Build Pack**: Docker Compose
- **Status**: Deployment queued (UUID: `fo840osw0gookkgcs4cc8skc`)

## 📋 Next Steps

### 1. Set Environment Variables in Coolify Dashboard
Navigate to your Coolify dashboard: http://187.77.26.99:8000

Find the "pi-website-builder" application and set the following environment variables:

```bash
# Database (using internal PostgreSQL from docker-compose)
DATABASE_URL=postgresql://postgres:password@postgres:5432/pi_website_builder

# NextAuth (generate a secure secret)
NEXTAUTH_SECRET=$(openssl rand -base64 32)
# Or use: https://generate-secret.vercel.app/32

NEXTAUTH_URL=http://o4o04s84gcck48ckww8888c4.187.77.26.99.sslip.io

# Google OAuth (for authentication)
# Create credentials at: https://console.cloud.google.com/apis/credentials
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret

# Gemini AI API
# Get API key from: https://makersuite.google.com/app/apikey
GEMINI_API_KEY=your-gemini-api-key

# Stripe (optional for now)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Docker Orchestrator (disable for initial deployment)
DISABLE_DOCKER_ORCHESTRATOR=true
```

### 2. Monitor Build Logs
Check the build logs in Coolify dashboard to ensure the application builds successfully. The build may take 5-10 minutes.

### 3. Access the Application
Once deployed, access your Pi Website Builder at the temporary URL. You can later set up a custom domain in Coolify.

### 4. Initial Setup
When you first access the application:
1. Sign in with Google (after configuring OAuth)
2. Purchase credits (Stripe integration needed for real payments)
3. Generate your first website!

## 🐛 Known Issues & Workarounds

### Docker Socket Access
The Docker orchestrator service requires Docker socket access (`/var/run/docker.sock`) to spawn user website containers. This may not work in Coolify's sandboxed environment.

**Workaround**: Set `DISABLE_DOCKER_ORCHESTRATOR=true` and implement website preview via static file serving initially. The Docker orchestrator can be enabled later when running on a dedicated VPS with Docker socket access.

### Database Migrations
The Dockerfile includes a startup script that runs `prisma migrate deploy`. This will automatically apply database migrations when the container starts.

If migrations fail, you may need to manually run:
```bash
# Connect to the running container
docker exec -it pi-website-builder-app-1 npx prisma migrate deploy
```

### Google OAuth Redirect URI
Add the following redirect URI to your Google OAuth credentials:
```
http://o4o04s84gcck48ckww8888c4.187.77.26.99.sslip.io/api/auth/callback/google
```

## 🔧 Architecture Overview

The application consists of 4 services defined in `docker-compose.yml`:

1. **app** (Port 3000): Next.js application with API routes
2. **postgres**: PostgreSQL database for user data
3. **redis**: Redis cache for sessions (optional)
4. **docker-orchestrator** (Port 3001): Express service for managing Docker containers (disabled by default)

## 📊 Health Checks

The application includes health check endpoints:
- `GET /api/health` - Application health
- `GET /api/auth/[...nextauth]` - Authentication status

## 🚀 Scaling Considerations

For production traffic:
1. Increase resource limits in Coolify
2. Set up PostgreSQL connection pooling
3. Implement Redis caching for generated websites
4. Add CDN for static assets

## 🔄 Updating the Application

To deploy updates:
1. Push changes to GitHub (`git push origin master`)
2. Coolify will automatically detect and deploy (if webhooks configured)
3. Or manually trigger redeploy via Coolify dashboard

## 🆘 Troubleshooting

### Application won't start
- Check environment variables are set correctly
- Verify database connectivity
- Review build logs for errors

### Authentication not working
- Ensure Google OAuth credentials are correct
- Check redirect URI matches the deployment URL
- Verify NEXTAUTH_SECRET is set

### Database connection errors
- Confirm PostgreSQL container is running
- Check DATABASE_URL format
- Verify network connectivity between containers

## 📞 Support

For issues with:
- **Coolify deployment**: Check Coolify documentation
- **Application functionality**: Review the implementation blueprint
- **Database issues**: Check Prisma migration logs

---

**Deployment Time**: March 5, 2026  
**GitHub Repository**: https://github.com/camster91/pi-website-builder  
**Coolify Dashboard**: http://187.77.26.99:8000  
**Application URL**: http://o4o04s84gcck48ckww8888c4.187.77.26.99.sslip.io