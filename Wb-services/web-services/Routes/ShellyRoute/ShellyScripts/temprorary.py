import requests

# set the IP address of your Shelly smart plug
shelly_ip = "10.0.0.217"

# get the current state of the smart plug
url = f"http://{shelly_ip}/rpc"
payload = {
    "id": 1,
    "method": "Switch.GetStatus",
    "params": {"id":0}
}
response = requests.post(url, json=payload)

# print the response
print(response.json())
