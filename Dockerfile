# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

# Install all deps (including devDependencies) without running postinstall scripts
RUN NODE_ENV=development npm ci --ignore-scripts

# Generate Prisma client explicitly (after schema is copied)
RUN npx prisma generate

COPY . .

# Build — DATABASE_URL must exist even for build; use a dummy sqlite path
ENV DATABASE_URL="file:/tmp/build.db"
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Create writable data dir for SQLite
RUN mkdir -p /data && chown nextjs:nodejs /data

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/scripts ./scripts

RUN chown -R nextjs:nodejs /app && \
    chmod +x /app/scripts/start.sh

USER nextjs

EXPOSE 3000

VOLUME ["/data"]

CMD ["/app/scripts/start.sh"]
