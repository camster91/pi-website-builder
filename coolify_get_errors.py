import requests
import json
import sys
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

API_BASE = "http://187.77.26.99:8000/api/v1"
AUTH_TOKEN = "2|OyUt8feqoaBUVu1Uvvkq59CCqNjIdj4j2Vf0OXYf"
DEPLOY_UUID = "ssc4cwcgks4ws8ow8kw4o8sg"

headers = {
    "Authorization": f"Bearer {AUTH_TOKEN}",
    "Content-Type": "application/json"
}

r = requests.get(f"{API_BASE}/deployments/{DEPLOY_UUID}", headers=headers)
if r.status_code == 200:
    dd = r.json()
    logs_str = dd.get('logs', '[]')
    logs = json.loads(logs_str) if isinstance(logs_str, str) else logs_str
    
    if isinstance(logs, list):
        # Find build error entries
        for entry in logs:
            out = entry.get('output', '')
            typ = entry.get('type', '')
            if typ == 'stderr' and ('error' in out.lower() or 'failed' in out.lower() or 'Build error' in out):
                for line in out.split('\n'):
                    if line.strip():
                        print(f"[ERR] {line[:250]}")
