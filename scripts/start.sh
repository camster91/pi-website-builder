#!/bin/sh
set -e

# Ensure the data directory exists for SQLite
mkdir -p /data

# Push schema to database (safe for SQLite, idempotent)
echo "🗄️  Syncing database schema..."
npx prisma db push --skip-generate

# Start the application
echo "🚀 Starting Pi Website Builder..."
exec node_modules/.bin/next start
