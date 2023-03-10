from phue import Bridge
# import os
# from dotenv import load_dotenv
# from pathlib import Path

# dotenv_path = Path('.env')
# load_dotenv(dotenv_path=dotenv_path)



# IP address of your Philips Hue bridge
bridge_ip = '10.0.0.3'

print(bridge_ip)

# API username
api_username = 'HVmL3Zatw2OdLFfUtpfp9Em33HAoganA59w0vaDj'

# Connect to the bridge with the API username
b = Bridge(bridge_ip, username=api_username)

# Get the ID of the light you want to turn on
lights=b.get_light_objects()

# Print the properties of each light
for light in lights:
    print(light.name)
    print(light.on)
    print(light.brightness)
    print(light.xy)
    print(light.light_id) 
    print(light.light_id) 