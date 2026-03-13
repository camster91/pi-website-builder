#!/bin/sh
set -e

echo "🗄️  Running database migrations..."
npx prisma migrate deploy

echo "🚀 Starting Pi Website Builder..."
exec node_modules/.bin/next start
