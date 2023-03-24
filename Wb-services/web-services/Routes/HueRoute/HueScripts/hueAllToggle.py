from phue import Bridge
import os
from dotenv import load_dotenv, find_dotenv
import sys

load_dotenv(find_dotenv())

# IP address of your Philips Hue bridge
bridge_ip = os.getenv('HUE_IP')

# API username
api_username = 'HVmL3Zatw2OdLFfUtpfp9Em33HAoganA59w0vaDj'

# Connect to the bridge with the API username
b = Bridge(bridge_ip, username=api_username)

# Get the ID of the light you want to toggle
light_ids = [1,2,3]
print(light_ids)

try:
    for light_id in light_ids:
        light_state = b.get_light(light_id)
        # If the bulb is off, turn it on
        if light_state['state']['on']:
            b.set_light(light_id, 'on', False)
        # If the bulb is off, turn it on
        else:
            b.set_light(light_id, 'on', True)
except Exception as e:
    # Handle the error here
    print(f"Error occurred: {e}")

sys.stdout.flush()

