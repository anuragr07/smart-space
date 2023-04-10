import requests
import os
from dotenv import load_dotenv, find_dotenv
import sys
import json

load_dotenv(find_dotenv())

# set the IP address of your Shelly device
shelly_ip = "10.0.0.217"

device_id = 0

# set the IP address of your Shelly smart plug
if sys.argv[1] == "Shelly Smart Plug-1":
    shelly_ip = os.getenv("SHELLY_IP_1")
    device_id = 1
if sys.argv[1] == "Shelly Smart Plug-2":
    shelly_ip = os.getenv("SHELLY_IP_2")
    device_id = 2

# set the URL for the Switch.Set method
url = f"http://{shelly_ip}/rpc"

# create the JSON request body
payload = {
    "id": 1,
    "method": "Switch.Set",
    "params": {
        "id": 0,
        "on": True
    }
}

# send the HTTP PUT request to turn on the device
response = requests.put(url, json.dumps(payload))

# check the response status code
if response.status_code == 200:
    res = {
        "status": "Success"
    }
else:
    res = {
        "status": "Failed"
    }


json_object = json.dumps(res)
print(json_object)