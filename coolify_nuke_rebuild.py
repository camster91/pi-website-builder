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

# Try setting SHA back to HEAD first, then to the real SHA
# This creates a "change" that forces a new deployment

print("=== Force rebuild strategy ===")

# 1. Set to a dummy value first
print("Step 1: Set SHA to dummy value...")
r = requests.patch(
    f"{API_BASE}/applications/{APP_UUID}",
    headers=headers,
    json={"git_commit_sha": "HEAD"}
)
print(f"  {r.status_code}: {r.text[:200]}")
time.sleep(2)

# 2. Now restart - should see it as a "new" deployment
print("\nStep 2: Restart to trigger fresh build from HEAD...")
r = requests.post(f"{API_BASE}/applications/{APP_UUID}/restart", headers=headers)
print(f"  {r.status_code}: {r.text[:300]}")

dep_uuid = ''
if r.status_code == 200:
    dep_uuid = r.json().get('deployment_uuid', '')
    print(f"  Deployment UUID: {dep_uuid}")

# 3. Monitor
print("\n=== Monitoring build (up to 5 min) ===")
for i in range(30):
    time.sleep(10)
    
    # Check app status
    dr = requests.get(f"{API_BASE}/applications/{APP_UUID}", headers=headers)
    if dr.status_code == 200:
        d = dr.json()
        status = d.get('status', 'unknown')
        updated = d.get('updated_at', '')
        print(f"  [{(i+1)*10:3d}s] Status: {status} | Updated: {updated}")
        
        if 'running' in status and i > 3:
            # Check logs to verify new build
            lr = requests.get(f"{API_BASE}/applications/{APP_UUID}/logs", headers=headers)
            if lr.status_code == 200:
                logs = lr.json().get('logs', '')
                lines = logs.split('\n')
                last_lines = '\n'.join(lines[-5:])
                print(f"  Latest logs: {last_lines}")
            break

print("\n=== Final check ===")
ar = requests.get(f"{API_BASE}/applications/{APP_UUID}", headers=headers)
if ar.status_code == 200:
    d = ar.json()
    print(f"  Status: {d.get('status')}")
    print(f"  FQDN: {d.get('fqdn')}")
    print(f"  SHA: {d.get('git_commit_sha')}")
    print(f"  Last online: {d.get('last_online_at')}")
