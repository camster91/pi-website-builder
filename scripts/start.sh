#!/bin/sh
set -e

echo "🗄️  Syncing database schema..."
npx prisma db push --skip-generate --accept-data-loss

echo "🚀 Starting Pi Website Builder..."
exec node_modules/.bin/next start
