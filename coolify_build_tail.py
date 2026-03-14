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
    if isinstance(data, list):
        # Get the last entries (build output)
        for entry in data[-40:]:
            ts = entry.get('timestamp', '')[-12:]
            typ = entry.get('type', '')
            out = entry.get('output', '')
            cmd = entry.get('command', '')
            if cmd and not entry.get('hidden', False):
                print(f"[{ts}] CMD: {cmd[:120]}")
            if out:
                for line in out.split('\n')[-3:]:
                    print(f"[{ts}] [{typ}] {line[:200]}")
    else:
        print(json.dumps(data, indent=2)[:3000])
else:
    print(f"Failed: {r.status_code} {r.text[:500]}")
