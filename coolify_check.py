import requests
import json
import time
import base64

API_BASE = "http://187.77.26.99:8000/api/v1"
AUTH_TOKEN = "2|OyUt8feqoaBUVu1Uvvkq59CCqNjIdj4j2Vf0OXYf"
APP_UUID = "bsgk40o40c4w8gckgwccggk8"

headers = {
    "Authorization": f"Bearer {AUTH_TOKEN}",
    "Content-Type": "application/json"
}

# Check the git_commit_sha and other details
print("=== Application Details ===")
resp = requests.get(f"{API_BASE}/applications/{APP_UUID}", headers=headers)
if resp.status_code == 200:
    data = resp.json()
    print(f"  Name: {data.get('name')}")
    print(f"  FQDN: {data.get('fqdn')}")
    print(f"  Status: {data.get('status')}")
    print(f"  Git Repo: {data.get('git_repository')}")
    print(f"  Git Branch: {data.get('git_branch')}")
    print(f"  Git Commit SHA: {data.get('git_commit_sha')}")
    print(f"  Build Pack: {data.get('build_pack')}")
    print(f"  Dockerfile Location: {data.get('dockerfile_location')}")
    print(f"  Last Online: {data.get('last_online_at')}")
    print(f"  Updated At: {data.get('updated_at')}")
    
    # Decode custom_labels to see routing
    labels = data.get('custom_labels', '')
    if labels:
        try:
            decoded = base64.b64decode(labels).decode('utf-8')
            print(f"\n  Traefik Labels:\n{decoded}")
        except:
            pass

# List all available API endpoints for this app
print("\n=== Probing API endpoints ===")
test_endpoints = [
    ("GET", f"{API_BASE}/applications/{APP_UUID}/envs"),
    ("GET", f"{API_BASE}/applications/{APP_UUID}/logs"),
]
for method, url in test_endpoints:
    if method == "GET":
        r = requests.get(url, headers=headers)
    else:
        r = requests.post(url, headers=headers)
    print(f"  {method} {url.split(APP_UUID)[1]} -> {r.status_code}")
    if r.status_code == 200:
        txt = r.text[:300]
        print(f"    {txt}")
