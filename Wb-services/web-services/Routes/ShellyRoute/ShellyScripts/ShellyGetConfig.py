import requests
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

# set the IP address of your Shelly smart plug
shelly_ip = '10.0.0.217'

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
response = requests.get(url, json=payload)
data = response.json()

print(data)