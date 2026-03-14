import requests
import json
import sys
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

API_BASE = "http://187.77.26.99:8000/api/v1"
AUTH_TOKEN = "2|OyUt8feqoaBUVu1Uvvkq59CCqNjIdj4j2Vf0OXYf"
APP_UUID = "bsgk40o40c4w8gckgwccggk8"
DEPLOY_UUID = "gcows8840s0wgcckoo484sgs"

headers = {
    "Authorization": f"Bearer {AUTH_TOKEN}",
    "Content-Type": "application/json"
}

# Try to get deployment-specific logs
print("=== Deployment logs ===")
urls_to_try = [
    f"{API_BASE}/deployments/{DEPLOY_UUID}",
    f"{API_BASE}/applications/{APP_UUID}/deployments/{DEPLOY_UUID}",
    f"{API_BASE}/applications/{APP_UUID}/logs?deployment_uuid={DEPLOY_UUID}",
    f"{API_BASE}/applications/{APP_UUID}/logs",
]

for url in urls_to_try:
    r = requests.get(url, headers=headers)
    print(f"\n--- {url.split('v1')[1]} -> {r.status_code} ---")
    if r.status_code == 200:
        data = r.json()
        if isinstance(data, dict):
            # Check for logs field
            logs = data.get('logs', data.get('deployment_log', ''))
            if logs:
                lines = logs.split('\n')
                for line in lines[-80:]:
                    print(line)
            else:
                # Print the whole thing if it's small
                txt = json.dumps(data, indent=2)
                print(txt[:3000])
        elif isinstance(data, list):
            for item in data[:5]:
                print(json.dumps(item, indent=2)[:500])
