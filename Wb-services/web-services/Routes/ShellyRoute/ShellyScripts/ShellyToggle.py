import requests

# set the IP address of your Shelly smart plug
shelly_ip = "10.0.0.8"

# toggle the switch state
url = f"http://{shelly_ip}/relay/0"
response = requests.post(url, data={"turn": "toggle"})

# print the response
print(response.json())
