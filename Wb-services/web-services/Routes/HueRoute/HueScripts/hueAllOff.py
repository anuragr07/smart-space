from phue import Bridge
import os
from dotenv import load_dotenv, find_dotenv
import sys;

load_dotenv(find_dotenv())

# IP address of your Philips Hue bridge
bridge_ip = os.getenv('HUE_IP')

# API username
api_username = 'HVmL3Zatw2OdLFfUtpfp9Em33HAoganA59w0vaDj'

# Connect to the bridge with the API username
b = Bridge(bridge_ip, username=api_username)

# Get the ID of the light you want to turn on
light_ids = [1,2,3]

try:
    # Turn on the light
    for light_id in light_ids:
        b.set_light(light_id, 'on', False)
    print(f"Turned off all lights")
except Exception as e:
    # Handle the error here
    print(f"Error occurred: {e}")

try:
    # Turn on the light
    for light_id in light_ids:
        b.set_light(light_id, 'on', False)
    print(f"Turned off all lights")
except Exception as e:
    # Handle the error here
    print(f"Error occurred: {e}")