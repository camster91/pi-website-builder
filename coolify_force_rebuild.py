import requests
import json
import sys
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

API_BASE = "http://187.77.26.99:8000/api/v1"
AUTH_TOKEN = "2|OyUt8feqoaBUVu1Uvvkq59CCqNjIdj4j2Vf0OXYf"
APP_UUID = "bsgk40o40c4w8gckgwccggk8"

headers = {
    "Authorization": f"Bearer {AUTH_TOKEN}",
    "Content-Type": "application/json"
}

# First, update the git_commit_sha to force Coolify to pull latest
print("=== Step 1: Update app to force new build ===")
update_resp = requests.patch(
    f"{API_BASE}/applications/{APP_UUID}",
    headers=headers,
    json={
        "git_commit_sha": "HEAD",
        "instant_deploy": True
    }
)
print(f"  Update status: {update_resp.status_code}")
print(f"  Response: {update_resp.text[:500]}")

# Try multiple deploy-related endpoints
print("\n=== Step 2: Trigger deploy ===")
deploy_endpoints = [
    ("POST", f"{API_BASE}/applications/{APP_UUID}/restart"),
    ("GET", f"{API_BASE}/applications/{APP_UUID}/start"),
    ("POST", f"{API_BASE}/applications/{APP_UUID}/start"),
]

for method, url in deploy_endpoints:
    print(f"\n  Trying {method} {url.split(APP_UUID)[1]}...")
    if method == "POST":
        r = requests.post(url, headers=headers, json={"force_rebuild": True})
    else:
        r = requests.get(url, headers=headers)
    print(f"  Status: {r.status_code}")
    print(f"  Response: {r.text[:300]}")
    if r.status_code == 200 and ("queued" in r.text.lower() or "deployment" in r.text.lower()):
        dep_data = r.json()
        dep_uuid = dep_data.get('deployment_uuid', '')
        print(f"  >>> Deployment UUID: {dep_uuid}")
        break

# Check what endpoints exist
print("\n=== Step 3: List available endpoints ===")
test_paths = [
    "/envs", "/logs", "/start", "/stop", "/restart",
    "/deploy", "/redeploy", "/rebuild"
]
for path in test_paths:
    url = f"{API_BASE}/applications/{APP_UUID}{path}"
    r = requests.get(url, headers=headers)
    tag = "OK" if r.status_code == 200 else str(r.status_code)
    print(f"  GET {path} -> {tag}")
    r2 = requests.post(url, headers=headers)
    tag2 = "OK" if r2.status_code == 200 else str(r2.status_code)
    print(f"  POST {path} -> {tag2}")
