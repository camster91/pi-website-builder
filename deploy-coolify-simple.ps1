# Simple Coolify deployment script
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
try {
    $Response = Invoke-RestMethod -Uri "$API/applications?project_uuid=$ProjectUUID" -Headers $Headers -Method Get -ErrorAction Stop
    $ExistingApp = $Response.data | Where-Object { $_.name -eq $AppName }
    
    if ($ExistingApp) {
        Write-Host "⚠️  Application already exists with UUID: $($ExistingApp.uuid)" -ForegroundColor Yellow
        Write-Host "🔄 Triggering redeploy..." -ForegroundColor Yellow
        
        # Trigger deploy
        $DeployResponse = Invoke-RestMethod -Uri "$API/applications/$($ExistingApp.uuid)/start" -Headers $Headers -Method Post -ErrorAction Stop
        Write-Host "✅ Deploy triggered successfully" -ForegroundColor Green
        
        # Get application details
        $AppDetails = Invoke-RestMethod -Uri "$API/applications/$($ExistingApp.uuid)" -Headers $Headers -Method Get -ErrorAction Stop
        if ($AppDetails.data.fqdn) {
            Write-Host "🌐 Application URL: https://$($AppDetails.data.fqdn)" -ForegroundColor Green
        }
        
        exit 0
    }
} catch {
    Write-Host "⚠️  Could not check existing applications: $($_.Exception.Message)" -ForegroundColor Yellow
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
}

try {
    $Response = Invoke-RestMethod -Uri "$API/applications/public" -Headers $Headers -Method Post -Body ($Payload | ConvertTo-Json) -ErrorAction Stop
    $AppUUID = $Response.data.uuid
    Write-Host "✅ Application created with UUID: $AppUUID (docker-compose)" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Docker-compose failed: $($_.Exception.Message)" -ForegroundColor Yellow
    Write-Host "Trying dockerfile..." -ForegroundColor Yellow
    
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
    }
    
    try {
        $Response = Invoke-RestMethod -Uri "$API/applications/public" -Headers $Headers -Method Post -Body ($Payload | ConvertTo-Json) -ErrorAction Stop
        $AppUUID = $Response.data.uuid
        
        if (-not $AppUUID) {
            Write-Host "❌ Failed to create application" -ForegroundColor Red
            Write-Host "Response: $($Response | ConvertTo-Json)" -ForegroundColor Red
            exit 1
        }
        
        Write-Host "✅ Application created with UUID: $AppUUID (dockerfile)" -ForegroundColor Green
    } catch {
        Write-Host "❌ Failed to create application: $($_.Exception.Message)" -ForegroundColor Red
        exit 1
    }
}

# Set environment variables note
Write-Host "`n📝 Setting environment variables..." -ForegroundColor Cyan
Write-Host "Note: You need to set actual values in Coolify dashboard for:" -ForegroundColor Yellow
Write-Host "- DATABASE_URL"
Write-Host "- NEXTAUTH_SECRET"
Write-Host "- GOOGLE_CLIENT_ID"
Write-Host "- GOOGLE_CLIENT_SECRET"
Write-Host "- GEMINI_API_KEY"
Write-Host "- STRIPE_SECRET_KEY"
Write-Host "- STRIPE_WEBHOOK_SECRET"
Write-Host "- BASE_DOMAIN"

# Trigger first deploy
Write-Host "🚀 Triggering initial deployment..." -ForegroundColor Cyan
try {
    $DeployResponse = Invoke-RestMethod -Uri "$API/applications/$AppUUID/start" -Headers $Headers -Method Post -ErrorAction Stop
    Write-Host "✅ Deploy triggered successfully" -ForegroundColor Green
    
    # Wait a moment and get application details
    Start-Sleep -Seconds 5
    $AppDetails = Invoke-RestMethod -Uri "$API/applications/$AppUUID" -Headers $Headers -Method Get -ErrorAction Stop
    if ($AppDetails.data.fqdn) {
        Write-Host "🌐 Application URL: https://$($AppDetails.data.fqdn)" -ForegroundColor Green
    } else {
        Write-Host "ℹ️  Application URL will be available after build completes" -ForegroundColor Yellow
    }
} catch {
    Write-Host "⚠️  Could not trigger deploy: $($_.Exception.Message)" -ForegroundColor Yellow
}

Write-Host "`n🎉 Deployment initiated!" -ForegroundColor Green
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. Set environment variables in Coolify dashboard" -ForegroundColor White
Write-Host "2. Monitor build logs in Coolify" -ForegroundColor White
Write-Host "3. Access your Pi Website Builder at the URL above" -ForegroundColor White