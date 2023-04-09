import requests
import json
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

# set the IP address of your Shelly smart plug
shelly_ip = '10.0.0.217'

rpc_command = '{"jsonrpc": "2.0", "id": 1, "method": "Switch.GetStatus", "params": {id:0}}'

url = "http://" + shelly_ip + "/rpc"
headers = {'Content-Type': 'application/json'}
response = requests.post(url, headers=headers, data=rpc_command)

data = json.loads(response.content)

print(data)

