import requests
import os
from dotenv import load_dotenv, find_dotenv
import sys
import json

load_dotenv(find_dotenv())

shelly_ip = "10.0.0.217"

# set the IP address of your Shelly smart plug
if sys.argv[1] == "Shelly Smart Plug-1":
    shelly_ip = os.getenv("SHELLY_IP_1")
    device_id = 1
if sys.argv[1] == "Shelly Smart Plug-2":
    shelly_ip = os.getenv("SHELLY_IP_2")
    device_id = 2

# retrieve current energy consumption data
url = f"http://{shelly_ip}/rpc"
payload = {
    "id": 1,
    "method": "Switch.GetConfig",
    "params": {
        "id":0,
        "get_params": True,
    }
}

try:
    response = requests.get(url, json=payload)
    response.raise_for_status()  # Raise an exception if response code is not 200 OK
    responseConfig = response.json()
except Exception as e:
    print(f"Error retrieving data from {url}: {e}")
    responseConfig = None

# Get more information on shelly
url = f"http://{shelly_ip}/rpc"
payload = {
    "id": 1,
    "method": "Switch.GetStatus",
    "params": {
        "id":0,
        "get_params": True,
    }
}

try:
    response = requests.get(url, json=payload)
    response.raise_for_status()  # Raise an exception if response code is not 200 OK
    responseStatus = response.json()
except Exception as e:
    print(f"Error retrieving data from {url}: {e}")
    responseStatus = None

power = responseStatus["result"]["apower"]
voltage = responseStatus["result"]["voltage"]
current = responseStatus["result"]["current"]
aenergy_total = responseStatus["result"]["aenergy"]["total"]
temp = responseStatus['result']['temperature']

if responseStatus['result']['output']:
    status = "On"
if responseStatus['result']['output'] != True:
    status = "Off"

data = {
    "device_id": device_id,
    "device_name": responseConfig["result"]["name"],
    "status": status,
    "ip": shelly_ip,
    "settings": {
        "power": power,
        "current": current,
        "total_energy": aenergy_total,
        "temp": temp
    }
}

# Convert dictionary to JSON
json_object = json.dumps(data)

print(json_object)

# data = response.json()


# print(data)