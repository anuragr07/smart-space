import requests
import sys
# set the IP address of your Shelly smart plug
shelly_ip = "10.0.0.250"

# retrieve current energy consumption data
url = f"http://{shelly_ip}/rpc"
payload = {
    "id": 1,
    "method": "Switch.GetStatus",
    "params": {
        "id":0,
        "get_params": True,
    }
}
response = requests.get(url, json=payload)
data = response.json()
print(data)

# extract energy consumption data
power = data["result"]["apower"]
voltage = data["result"]["voltage"]
current = data["result"]["current"]
aenergy_total = data["result"]["aenergy"]["total"]

# print energy consumption data
print(f"Current power consumption: {power} W")
print(f"Voltage: {voltage} V")
print(f"Current: {current} A")
print(f"Total energy consumption: {aenergy_total} kWh")

# print(f"Current power consumption:  W")
# print(f"Voltage:  V")
# print(f"Current:  A")
# print(f"Total energy consumption:  kWh")

sys.stdout.flush()

sys.stdout.flush()