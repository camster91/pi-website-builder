const { execSync } = require('child_process')
const fs = require('fs')

console.log('🚀 Running database migrations...')

try {
  // Check if DATABASE_URL is set
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL is not set')
    process.exit(1)
  }

  // Generate Prisma Client
  console.log('📦 Generating Prisma Client...')
  execSync('npx prisma generate', { stdio: 'inherit' })

  // Run migrations
  console.log('🗄️  Running database migrations...')
  execSync('npx prisma migrate deploy', { stdio: 'inherit' })

  console.log('✅ Database migrations completed successfully')
} catch (error) {
  console.error('❌ Migration failed:', error.message)
  process.exit(1)
}