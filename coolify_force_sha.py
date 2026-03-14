import requests
import json
import time
import sys
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

API_BASE = "http://187.77.26.99:8000/api/v1"
AUTH_TOKEN = "2|OyUt8feqoaBUVu1Uvvkq59CCqNjIdj4j2Vf0OXYf"
APP_UUID = "bsgk40o40c4w8gckgwccggk8"

headers = {
    "Authorization": f"Bearer {AUTH_TOKEN}",
    "Content-Type": "application/json"
}

NEW_SHA = "c70d6af"

# Step 1: Stop the app first
print("=== Step 1: Stop the app ===")
r = requests.post(f"{API_BASE}/applications/{APP_UUID}/stop", headers=headers)
print(f"  Stop: {r.status_code} - {r.text[:200]}")

time.sleep(3)

# Step 2: Update git_commit_sha to force new code
print("\n=== Step 2: Update to new commit SHA ===")
r = requests.patch(
    f"{API_BASE}/applications/{APP_UUID}",
    headers=headers,
    json={
        "git_commit_sha": NEW_SHA,
        "instant_deploy": True
    }
)
print(f"  Patch: {r.status_code} - {r.text[:200]}")

time.sleep(2)

# Step 3: Start the app (which should trigger a fresh build)
print("\n=== Step 3: Start app (triggers rebuild) ===")
r = requests.post(f"{API_BASE}/applications/{APP_UUID}/start", headers=headers)
print(f"  Start: {r.status_code} - {r.text[:300]}")

if r.status_code == 200:
    dep_uuid = r.json().get('deployment_uuid', '')
    print(f"  Deployment UUID: {dep_uuid}")
    
    if dep_uuid:
        # Step 4: Poll deployment status
        print("\n=== Step 4: Monitoring deployment ===")
        for i in range(30):
            time.sleep(10)
            dr = requests.get(f"{API_BASE}/applications/{APP_UUID}", headers=headers)
            if dr.status_code == 200:
                status = dr.json().get('status', 'unknown')
                updated = dr.json().get('updated_at', '')
                sha = dr.json().get('git_commit_sha', '')
                print(f"  [{i*10}s] Status: {status} | SHA: {sha} | Updated: {updated}")
                if status == 'running:healthy' or (status.startswith('running') and i > 6):
                    print("\n  App is running! Checking if it responds...")
                    break
            else:
                print(f"  [{i*10}s] API check failed: {dr.status_code}")

print("\n=== Done ===")
print("Check https://pibuild.ashbi.ca in your browser")
