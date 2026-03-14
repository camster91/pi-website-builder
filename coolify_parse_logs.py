import requests
import json
import sys
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

API_BASE = "http://187.77.26.99:8000/api/v1"
AUTH_TOKEN = "2|OyUt8feqoaBUVu1Uvvkq59CCqNjIdj4j2Vf0OXYf"
DEPLOY_UUID = "gcows8840s0wgcckoo484sgs"

headers = {
    "Authorization": f"Bearer {AUTH_TOKEN}",
    "Content-Type": "application/json"
}

r = requests.get(f"{API_BASE}/deployments/{DEPLOY_UUID}", headers=headers)
if r.status_code == 200:
    data = r.json()
    # The 'logs' field is a JSON string containing an array of log entries
    logs_str = data.get('logs', '[]')
    logs = json.loads(logs_str) if isinstance(logs_str, str) else logs_str
    
    print(f"Total log entries: {len(logs)}")
    print(f"Status: {data.get('status')}")
    print(f"Finished at: {data.get('finished_at')}")
    print(f"Commit: {data.get('commit')}")
    print(f"Commit msg: {data.get('commit_message')}")
    print("=" * 60)
    
    # Print last 30 entries which should show the build result
    for entry in logs[-30:]:
        typ = entry.get('type', '')
        out = entry.get('output', '')
        if out:
            for line in out.split('\n'):
                prefix = 'ERR' if typ == 'stderr' else 'OUT'
                print(f"[{prefix}] {line}")
else:
    print(f"Failed: {r.status_code}")
