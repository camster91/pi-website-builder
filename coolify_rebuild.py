import requests
import json

API_BASE = "http://187.77.26.99:8000/api/v1"
AUTH_TOKEN = "2|OyUt8feqoaBUVu1Uvvkq59CCqNjIdj4j2Vf0OXYf"
APP_UUID = "bsgk40o40c4w8gckgwccggk8"

headers = {
    "Authorization": f"Bearer {AUTH_TOKEN}",
    "Content-Type": "application/json"
}

# 1. Try deploy endpoint (rebuild from git)
print("=== Attempting full rebuild deploy ===")
endpoints = [
    f"{API_BASE}/applications/{APP_UUID}/deploy",
    f"{API_BASE}/applications/{APP_UUID}/restart",
    f"{API_BASE}/deploy",
]

for url in endpoints:
    print(f"\nTrying: {url}")
    try:
        if "deploy" in url and url == endpoints[2]:
            # The /deploy endpoint might need a body
            resp = requests.post(url, headers=headers, json={"uuid": APP_UUID, "force_rebuild": True})
        else:
            resp = requests.post(url, headers=headers, json={"force_rebuild": True})
        print(f"  Status: {resp.status_code}")
        print(f"  Response: {resp.text[:500]}")
        if resp.status_code == 200:
            print("  SUCCESS - deploy triggered")
            break
    except Exception as e:
        print(f"  Error: {e}")

# 2. Check latest deployments
print("\n=== Recent deployments ===")
dep_url = f"{API_BASE}/applications/{APP_UUID}/deployments"
resp = requests.get(dep_url, headers=headers)
print(f"Status: {resp.status_code}")
if resp.status_code == 200:
    data = resp.json()
    deps = data if isinstance(data, list) else data.get('data', data)
    if isinstance(deps, list):
        for d in deps[:5]:
            print(f"  - {d.get('status', '?')} | {d.get('created_at', '?')} | {d.get('deployment_uuid', '?')}")
    else:
        print(json.dumps(deps, indent=2)[:1000])
else:
    print(f"  Failed: {resp.text[:500]}")
