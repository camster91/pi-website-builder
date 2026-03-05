# Coolify API Configuration
$API = "http://187.77.26.99:8000/api/v1"
$AuthToken = "2|OyUt8feqoaBUVu1Uvvkq59CCqNjIdj4j2Vf0OXYf"
$ProjectUUID = "hc4ocwo0sc4o8kkkwcogssgk"
$ServerUUID = "b4gwko84g88ssgwk0wc8ks40"
$GitRepo = "https://github.com/camster91/pi-website-builder"
$AppName = "pi-website-builder"

$Headers = @{
    "Authorization" = "Bearer $AuthToken"
    "Content-Type" = "application/json"
}

Write-Host "🚀 Deploying Pi Website Builder to Coolify..." -ForegroundColor Cyan
Write-Host "Repository: $GitRepo"

# Check if application already exists
Write-Host "🔍 Checking for existing application..." -ForegroundColor Yellow
$ExistingApps = Invoke-RestMethod -Uri "$API/applications?project_uuid=$ProjectUUID" -Headers $Headers -Method Get
$ExistingApp = $ExistingApps.data | Where-Object { $_.name -eq $AppName }

if ($ExistingApp) {
    Write-Host "⚠️  Application already exists with UUID: $($ExistingApp.uuid)" -ForegroundColor Yellow
    Write-Host "🔄 Triggering redeploy..." -ForegroundColor Yellow
    
    # Trigger deploy
    $DeployResponse = Invoke-RestMethod -Uri "$API/applications/$($ExistingApp.uuid)/start" -Headers $Headers -Method Post
    Write-Host "✅ Deploy triggered: $($DeployResponse | ConvertTo-Json -Compress)" -ForegroundColor Green
    
    # Get application details
    $AppDetails = Invoke-RestMethod -Uri "$API/applications/$($ExistingApp.uuid)" -Headers $Headers -Method Get
    if ($AppDetails.data.fqdn) {
        Write-Host "🌐 Application URL: https://$($AppDetails.data.fqdn)" -ForegroundColor Green
    }
    
    exit 0
}

Write-Host "🆕 Creating new application..." -ForegroundColor Cyan

# Try docker-compose first
$Payload = @{
    project_uuid = $ProjectUUID
    environment_name = "production"
    server_uuid = $ServerUUID
    git_repository = $GitRepo
    git_branch = "main"
    build_pack = "dockercompose"
    ports_exposes = "3000"
    name = $AppName
    docker_compose_file = "docker-compose.yml"
    docker_compose_service = "app"
} | ConvertTo-Json

try {
    $Response = Invoke-RestMethod -Uri "$API/applications/public" -Headers $Headers -Method Post -Body $Payload
    $AppUUID = $Response.data.uuid
    Write-Host "✅ Application created with UUID: $AppUUID" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Docker-compose failed, trying dockerfile..." -ForegroundColor Yellow
    
    # Fallback to dockerfile
    $Payload = @{
        project_uuid = $ProjectUUID
        environment_name = "production"
        server_uuid = $ServerUUID
        git_repository = $GitRepo
        git_branch = "main"
        build_pack = "dockerfile"
        ports_exposes = "3000"
        name = $AppName
    } | ConvertTo-Json
    
    $Response = Invoke-RestMethod -Uri "$API/applications/public" -Headers $Headers -Method Post -Body $Payload
    $AppUUID = $Response.data.uuid
    
    if (-not $AppUUID) {
        Write-Host "❌ Failed to create application" -ForegroundColor Red
        Write-Host "Response: $($Response | ConvertTo-Json)" -ForegroundColor Red
        exit 1
    }
    
    Write-Host "✅ Application created with UUID: $AppUUID" -ForegroundColor Green
}

# Set environment variables note
Write-Host "`n📝 Setting environment variables..." -ForegroundColor Cyan
Write-Host "Note: You need to set actual values in Coolify dashboard for:" -ForegroundColor Yellow
Write-Host "- DATABASE_URL" -ForegroundColor Yellow
Write-Host "- NEXTAUTH_SECRET" -ForegroundColor Yellow
Write-Host "- GOOGLE_CLIENT_ID" -ForegroundColor Yellow
Write-Host "- GOOGLE_CLIENT_SECRET" -ForegroundColor Yellow
Write-Host "- GEMINI_API_KEY" -ForegroundColor Yellow
Write-Host "- STRIPE_SECRET_KEY" -ForegroundColor Yellow
Write-Host "- STRIPE_WEBHOOK_SECRET" -ForegroundColor Yellow
Write-Host "- BASE_DOMAIN" -ForegroundColor Yellow

# Trigger first deploy
Write-Host "🚀 Triggering initial deployment..." -ForegroundColor Cyan
$DeployResponse = Invoke-RestMethod -Uri "$API/applications/$AppUUID/start" -Headers $Headers -Method Post
Write-Host "✅ Deploy triggered: $($DeployResponse | ConvertTo-Json -Compress)" -ForegroundColor Green

# Wait a moment and get application details
Start-Sleep -Seconds 5
$AppDetails = Invoke-RestMethod -Uri "$API/applications/$AppUUID" -Headers $Headers -Method Get
if ($AppDetails.data.fqdn) {
    Write-Host "🌐 Application URL: https://$($AppDetails.data.fqdn)" -ForegroundColor Green
} else {
    Write-Host "ℹ️  Application URL will be available after build completes" -ForegroundColor Yellow
}

Write-Host "`n🎉 Deployment initiated!" -ForegroundColor Green
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. Set environment variables in Coolify dashboard" -ForegroundColor White
Write-Host "2. Monitor build logs in Coolify" -ForegroundColor White
Write-Host "3. Access your Pi Website Builder at the URL above" -ForegroundColor White