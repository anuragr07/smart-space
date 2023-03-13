import requests
import time
# set the IP address of your Shelly smart plug
shelly_ip = "10.0.0.8"

# set a timer for the Shelly smart plug (turn on for 5 minutes)
url = f"http://{shelly_ip}/rpc"
payload = {
    "id": 1,
    "method": "Switch.Timer",
    "params": {
        "timer": 1,
        "mode": 1,
        "interval": 60,
        "output": 1,
        "start_time": int(time.time()) + 60 # set start time 1 minute from now
    }
}
response = requests.put(url, json=payload)

# print the response
print(response.json())
