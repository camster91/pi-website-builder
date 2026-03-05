#!/usr/bin/env python3
import requests
import json
import sys
import time

# Coolify API Configuration
API_BASE = "http://187.77.26.99:8000/api/v1"
AUTH_TOKEN = "2|OyUt8feqoaBUVu1Uvvkq59CCqNjIdj4j2Vf0OXYf"
PROJECT_UUID = "hc4ocwo0sc4o8kkkwcogssgk"
SERVER_UUID = "b4gwko84g88ssgwk0wc8ks40"
GIT_REPO = "https://github.com/camster91/pi-website-builder"
APP_NAME = "pi-website-builder"

headers = {
    "Authorization": f"Bearer {AUTH_TOKEN}",
    "Content-Type": "application/json"
}

def get_existing_app():
    """Check if application already exists"""
    url = f"{API_BASE}/applications?project_uuid={PROJECT_UUID}"
    response = requests.get(url, headers=headers)
    
    if response.status_code != 200:
        print(f"❌ Failed to fetch applications: {response.text}")
        return None
    
    data = response.json()
    for app in data.get('data', []):
        if app.get('name') == APP_NAME:
            return app.get('uuid')
    return None

def trigger_deploy(app_uuid):
    """Trigger deployment of existing application"""
    print(f"🔄 Triggering redeploy for {app_uuid}...")
    url = f"{API_BASE}/applications/{app_uuid}/start"
    response = requests.post(url, headers=headers)
    
    if response.status_code == 200:
        print("✅ Deploy triggered successfully")
        return True
    else:
        print(f"❌ Failed to trigger deploy: {response.text}")
        return False

def create_application():
    """Create new application in Coolify"""
    print("🆕 Creating new application...")
    
    # Try docker-compose first
    payload = {
        "project_uuid": PROJECT_UUID,
        "environment_name": "production",
        "server_uuid": SERVER_UUID,
        "git_repository": GIT_REPO,
        "git_branch": "main",
        "build_pack": "dockercompose",
        "ports_exposes": "3000",
        "name": APP_NAME,
        "docker_compose_file": "docker-compose.yml",
        "docker_compose_service": "app"
    }
    
    url = f"{API_BASE}/applications/public"
    response = requests.post(url, headers=headers, json=payload)
    
    if response.status_code == 200:
        app_uuid = response.json().get('data', {}).get('uuid')
        if app_uuid:
            print(f"✅ Application created with UUID: {app_uuid}")
            return app_uuid
    
    print("⚠️  Docker-compose failed, trying dockerfile...")
    
    # Fallback to dockerfile
    payload = {
        "project_uuid": PROJECT_UUID,
        "environment_name": "production",
        "server_uuid": SERVER_UUID,
        "git_repository": GIT_REPO,
        "git_branch": "main",
        "build_pack": "dockerfile",
        "ports_exposes": "3000",
        "name": APP_NAME
    }
    
    response = requests.post(url, headers=headers, json=payload)
    
    if response.status_code == 200:
        app_uuid = response.json().get('data', {}).get('uuid')
        if app_uuid:
            print(f"✅ Application created with UUID: {app_uuid}")
            return app_uuid
    
    print(f"❌ Failed to create application: {response.text}")
    return None

def get_application_url(app_uuid):
    """Get application URL"""
    url = f"{API_BASE}/applications/{app_uuid}"
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        fqdn = response.json().get('data', {}).get('fqdn')
        if fqdn:
            return f"https://{fqdn}"
    return None

def main():
    print("🚀 Deploying Pi Website Builder to Coolify...")
    print(f"Repository: {GIT_REPO}")
    
    # Check for existing app
    existing_app = get_existing_app()
    
    if existing_app:
        print(f"⚠️  Application already exists with UUID: {existing_app}")
        if trigger_deploy(existing_app):
            time.sleep(3)
            app_url = get_application_url(existing_app)
            if app_url:
                print(f"🌐 Application URL: {app_url}")
            else:
                print("ℹ️  Application URL will be available after build completes")
        return
    
    # Create new application
    app_uuid = create_application()
    if not app_uuid:
        sys.exit(1)
    
    # Set environment variables note
    print("\n📝 Setting environment variables...")
    print("Note: You need to set actual values in Coolify dashboard for:")
    print("- DATABASE_URL")
    print("- NEXTAUTH_SECRET")
    print("- GOOGLE_CLIENT_ID")
    print("- GOOGLE_CLIENT_SECRET")
    print("- GEMINI_API_KEY")
    print("- STRIPE_SECRET_KEY")
    print("- STRIPE_WEBHOOK_SECRET")
    print("- BASE_DOMAIN")
    
    # Trigger first deploy
    if trigger_deploy(app_uuid):
        time.sleep(5)
        app_url = get_application_url(app_uuid)
        if app_url:
            print(f"🌐 Application URL: {app_url}")
        else:
            print("ℹ️  Application URL will be available after build completes")
    
    print("\n🎉 Deployment initiated!")
    print("📋 Next steps:")
    print("1. Set environment variables in Coolify dashboard")
    print("2. Monitor build logs in Coolify")
    print("3. Access your Pi Website Builder at the URL above")

if __name__ == "__main__":
    main()