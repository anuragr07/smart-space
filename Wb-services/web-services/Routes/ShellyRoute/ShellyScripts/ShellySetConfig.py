import requests

# set the IP address of your Shelly smart plug
shelly_ip = "10.0.0.8"

# retrieve current energy consumption data
url = f"http://{shelly_ip}/rpc"
payload = {
    "id": 1,
    "method": "Switch.SetConfig",
    "params": {
        "id":0,
        "get_params": True,
        "auto_off_delay":60
    }
}
response = requests.get(url, json=payload)
data = response.json()

print(data)