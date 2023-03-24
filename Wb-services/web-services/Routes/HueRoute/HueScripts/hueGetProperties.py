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
    print(f"Light {light.name}:")
    print(f"  On: {light.on}")
    print(f"  Brightness: {light.brightness}")
    print(f"  Hue: {light.hue}")
    print(f"  Saturation: {light.saturation}")
    print(f"  XY color: {light.xy}")
    print(f"  Alert: {light.alert}")
    print(f"  Effect: {light.effect}")
    print(f"  Reachable: {light.reachable}")
    print(f"  Color mode: {light.colormode}")
    print(f"  Name: {light.name}")
    print(f"  Type: {light.type}")