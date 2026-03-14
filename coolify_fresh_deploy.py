import requests
import json
import time
import sys
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

API_BASE = "http://187.77.26.99:8000/api/v1"
AUTH_TOKEN = "2|OyUt8feqoaBUVu1Uvvkq59CCqNjIdj4j2Vf0OXYf"
APP_UUID = "bsgk40o40c4w8gckgwccggk8"
NEW_SHA = "8c97033cd3f4f4453636b710277a10d5bae96587"

headers = {
    "Authorization": f"Bearer {AUTH_TOKEN}",
    "Content-Type": "application/json"
}

# Step 1: Stop app
print("Step 1: Stopping app...")
r = requests.post(f"{API_BASE}/applications/{APP_UUID}/stop", headers=headers)
print(f"  {r.status_code}: {r.text[:200]}")
time.sleep(5)

# Step 2: Set the EXACT new commit SHA (not HEAD)
print(f"\nStep 2: Setting commit SHA to {NEW_SHA}...")
r = requests.patch(f"{API_BASE}/applications/{APP_UUID}", headers=headers,
    json={"git_commit_sha": NEW_SHA})
print(f"  {r.status_code}: {r.text[:200]}")
time.sleep(2)

# Step 3: Start - this should see a NEW sha and build fresh
print("\nStep 3: Starting app (new SHA should trigger fresh build)...")
r = requests.post(f"{API_BASE}/applications/{APP_UUID}/start", headers=headers)
print(f"  {r.status_code}: {r.text[:300]}")
dep_uuid = ''
if r.status_code == 200:
    dep_uuid = r.json().get('deployment_uuid', '')
    print(f"  Deployment UUID: {dep_uuid}")

# Step 4: Monitor build
print("\nStep 4: Monitoring (up to 8 min)...")
for i in range(48):
    time.sleep(10)
    
    if dep_uuid:
        dr = requests.get(f"{API_BASE}/deployments/{dep_uuid}", headers=headers)
        if dr.status_code == 200:
            dd = dr.json()
            status = dd.get('status', 'unknown')
            if i % 3 == 0 or status in ['finished', 'failed']:
                print(f"  [{(i+1)*10:3d}s] Deploy: {status}")
            if status == 'finished':
                print("  BUILD SUCCESS!")
                break
            elif status == 'failed':
                logs_str = dd.get('logs', '[]')
                logs = json.loads(logs_str) if isinstance(logs_str, str) else logs_str
                if isinstance(logs, list):
                    for entry in logs[-15:]:
                        out = entry.get('output', '')
                        if out and 'error' in out.lower():
                            print(f"    ERR: {out[:200]}")
                print("  BUILD FAILED!")
                break
    else:
        ar = requests.get(f"{API_BASE}/applications/{APP_UUID}", headers=headers)
        if ar.status_code == 200:
            app_status = ar.json().get('status', '')
            if i % 3 == 0:
                print(f"  [{(i+1)*10:3d}s] App: {app_status}")
            if 'running' in app_status and i > 6:
                print("  App appears to be running!")
                break

# Final
print("\n=== Final ===")
ar = requests.get(f"{API_BASE}/applications/{APP_UUID}", headers=headers)
if ar.status_code == 200:
    d = ar.json()
    print(f"  Status: {d.get('status')}")
    print(f"  URL: {d.get('fqdn')}")
    print(f"  SHA: {d.get('git_commit_sha')}")

lr = requests.get(f"{API_BASE}/applications/{APP_UUID}/logs", headers=headers)
if lr.status_code == 200:
    logs = lr.json().get('logs', '')
    lines = logs.split('\n')
    print("\n  Last 5 runtime log lines:")
    for line in lines[-5:]:
        print(f"    {line}")
