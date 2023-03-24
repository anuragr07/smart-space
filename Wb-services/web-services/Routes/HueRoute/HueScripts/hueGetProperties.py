from phue import Bridge
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

# IP address of your Philips Hue bridge
bridge_ip = os.getenv('HUE_IP')

print(bridge_ip)

# API username
api_username = 'HVmL3Zatw2OdLFfUtpfp9Em33HAoganA59w0vaDj'

# Connect to the bridge with the API username
b = Bridge(bridge_ip, username=api_username)

# Get the ID of the light you want to turn on
lights=b.get_light_objects()



try:
    # Print the properties of each light
    for light in lights:
        print(light.name)
        print(light.on)
        print(light.brightness)
        print(light.xy)
        print(light.light_id) 

except Exception as e:
    # Handle the error here
    print(f"Error occurred: {e}")
