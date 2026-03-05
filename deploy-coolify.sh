#!/bin/bash

# Coolify API Configuration
API="http://187.77.26.99:8000/api/v1"
AUTH="Authorization: Bearer 2|OyUt8feqoaBUVu1Uvvkq59CCqNjIdj4j2Vf0OXYf"
PROJECT_UUID="hc4ocwo0sc4o8kkkwcogssgk"
SERVER_UUID="b4gwko84g88ssgwk0wc8ks40"
GIT_REPO="https://github.com/camster91/pi-website-builder"
APP_NAME="pi-website-builder"

echo "🚀 Deploying Pi Website Builder to Coolify..."
echo "Repository: $GIT_REPO"

# Check if application already exists
echo "🔍 Checking for existing application..."
EXISTING_APP=$(curl -s -X GET -H "$AUTH" "$API/applications?project_uuid=$PROJECT_UUID" | jq -r '.data[] | select(.name=="'"$APP_NAME"'") | .uuid')

if [ ! -z "$EXISTING_APP" ]; then
    echo "⚠️  Application already exists with UUID: $EXISTING_APP"
    echo "🔄 Triggering redeploy..."
    
    # Trigger deploy
    DEPLOY_RESPONSE=$(curl -s -X POST -H "$AUTH" "$API/applications/$EXISTING_APP/start")
    echo "✅ Deploy triggered: $DEPLOY_RESPONSE"
    
    # Get application details
    APP_DETAILS=$(curl -s -X GET -H "$AUTH" "$API/applications/$EXISTING_APP")
    APP_URL=$(echo "$APP_DETAILS" | jq -r '.data.fqdn // empty')
    
    if [ ! -z "$APP_URL" ]; then
        echo "🌐 Application URL: https://$APP_URL"
    fi
    
    exit 0
fi

echo "🆕 Creating new application..."

# Create new application using docker-compose build pack
CREATE_RESPONSE=$(curl -s -X POST -H "$AUTH" -H "Content-Type: application/json" \
  "$API/applications/public" -d '{
    "project_uuid": "'"$PROJECT_UUID"'",
    "environment_name": "production",
    "server_uuid": "'"$SERVER_UUID"'",
    "git_repository": "'"$GIT_REPO"'",
    "git_branch": "main",
    "build_pack": "dockercompose",
    "ports_exposes": "3000",
    "name": "'"$APP_NAME"'",
    "docker_compose_file": "docker-compose.yml",
    "docker_compose_service": "app"
  }')

echo "Create response: $CREATE_RESPONSE"

APP_UUID=$(echo "$CREATE_RESPONSE" | jq -r '.data.uuid // empty')

if [ -z "$APP_UUID" ] || [ "$APP_UUID" = "null" ]; then
    echo "❌ Failed to create application"
    echo "Trying with dockerfile build pack..."
    
    # Fallback to dockerfile
    CREATE_RESPONSE=$(curl -s -X POST -H "$AUTH" -H "Content-Type: application/json" \
      "$API/applications/public" -d '{
        "project_uuid": "'"$PROJECT_UUID"'",
        "environment_name": "production",
        "server_uuid": "'"$SERVER_UUID"'",
        "git_repository": "'"$GIT_REPO"'",
        "git_branch": "main",
        "build_pack": "dockerfile",
        "ports_exposes": "3000",
        "name": "'"$APP_NAME"'"
      }')
    
    APP_UUID=$(echo "$CREATE_RESPONSE" | jq -r '.data.uuid // empty')
    
    if [ -z "$APP_UUID" ] || [ "$APP_UUID" = "null" ]; then
        echo "❌ Failed to create application with dockerfile as well"
        echo "Response: $CREATE_RESPONSE"
        exit 1
    fi
fi

echo "✅ Application created with UUID: $APP_UUID"

# Set environment variables (example - you'll need to set actual values)
echo "📝 Setting environment variables..."
echo "Note: You need to set actual values in Coolify dashboard for:"
echo "- DATABASE_URL"
echo "- NEXTAUTH_SECRET"
echo "- GOOGLE_CLIENT_ID"
echo "- GOOGLE_CLIENT_SECRET"
echo "- GEMINI_API_KEY"
echo "- STRIPE_SECRET_KEY"
echo "- STRIPE_WEBHOOK_SECRET"
echo "- BASE_DOMAIN"

# Trigger first deploy
echo "🚀 Triggering initial deployment..."
DEPLOY_RESPONSE=$(curl -s -X POST -H "$AUTH" "$API/applications/$APP_UUID/start")
echo "✅ Deploy triggered: $DEPLOY_RESPONSE"

# Wait a moment and get application details
sleep 5
APP_DETAILS=$(curl -s -X GET -H "$AUTH" "$API/applications/$APP_UUID")
APP_URL=$(echo "$APP_DETAILS" | jq -r '.data.fqdn // empty')

if [ ! -z "$APP_URL" ]; then
    echo "🌐 Application URL: https://$APP_URL"
else
    echo "ℹ️  Application URL will be available after build completes"
fi

echo ""
echo "🎉 Deployment initiated!"
echo "📋 Next steps:"
echo "1. Set environment variables in Coolify dashboard"
echo "2. Monitor build logs in Coolify"
echo "3. Access your Pi Website Builder at the URL above"