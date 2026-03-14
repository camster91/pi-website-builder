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

# Step 1: Update SHA to HEAD to pick up new commit
print("Step 1: Updating app to HEAD...")
r = requests.patch(f"{API_BASE}/applications/{APP_UUID}", headers=headers,
    json={"git_commit_sha": "HEAD", "instant_deploy": True})
print(f"  {r.status_code}: {r.text[:200]}")

time.sleep(2)

# Step 2: Restart (triggers full rebuild since code changed)
print("\nStep 2: Triggering restart/rebuild...")
r = requests.post(f"{API_BASE}/applications/{APP_UUID}/restart", headers=headers)
print(f"  {r.status_code}: {r.text[:300]}")
dep_uuid = r.json().get('deployment_uuid', '') if r.status_code == 200 else ''
if dep_uuid:
    print(f"  Deployment UUID: {dep_uuid}")

# Step 3: Monitor
print("\nStep 3: Monitoring build (up to 6 min)...")
last_status = ''
for i in range(36):
    time.sleep(10)
    
    # Check deployment if we have UUID
    if dep_uuid:
        dr = requests.get(f"{API_BASE}/deployments/{dep_uuid}", headers=headers)
        if dr.status_code == 200:
            dd = dr.json()
            dep_status = dd.get('status', 'unknown')
            if dep_status != last_status:
                last_status = dep_status
                print(f"  [{(i+1)*10:3d}s] Build status: {dep_status}")
            if dep_status in ['finished', 'failed']:
                if dep_status == 'failed':
                    # Get last few log lines
                    logs_str = dd.get('logs', '[]')
                    logs = json.loads(logs_str) if isinstance(logs_str, str) else logs_str
                    if isinstance(logs, list):
                        for entry in logs[-10:]:
                            out = entry.get('output', '')
                            if out and entry.get('type') == 'stderr':
                                for line in out.split('\n')[-2:]:
                                    print(f"    ERR: {line[:200]}")
                break
    
    # Also check app status
    ar = requests.get(f"{API_BASE}/applications/{APP_UUID}", headers=headers)
    if ar.status_code == 200:
        app_status = ar.json().get('status', '')
        if i % 3 == 0:
            print(f"  [{(i+1)*10:3d}s] App: {app_status}")

# Final status
print("\n=== Final Status ===")
ar = requests.get(f"{API_BASE}/applications/{APP_UUID}", headers=headers)
if ar.status_code == 200:
    d = ar.json()
    print(f"  App Status: {d.get('status')}")
    print(f"  URL: {d.get('fqdn')}")
    print(f"  Last Online: {d.get('last_online_at')}")

# Check runtime logs
print("\n=== Runtime Logs (last 10 lines) ===")
lr = requests.get(f"{API_BASE}/applications/{APP_UUID}/logs", headers=headers)
if lr.status_code == 200:
    logs = lr.json().get('logs', '')
    for line in logs.split('\n')[-10:]:
        print(f"  {line}")
