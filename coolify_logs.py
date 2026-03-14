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

# Get full logs
resp = requests.get(f"{API_BASE}/applications/{APP_UUID}/logs", headers=headers)
if resp.status_code == 200:
    data = resp.json()
    logs = data.get('logs', '')
    lines = logs.split('\n')
    for line in lines[-60:]:
        print(line)
