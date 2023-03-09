from phue import Bridge

# IP address of your Philips Hue bridge
bridge_ip = '10.0.0.4'

# API username
api_username = 'HVmL3Zatw2OdLFfUtpfp9Em33HAoganA59w0vaDj'

# Connect to the bridge with the API username
b = Bridge(bridge_ip, username=api_username)

# Get the ID of the light you want to turn on
light_id = 1

light_state = b.get_light(light_id)

# If the bulb is on, turn it off
if light_state['state']['on']:
    b.set_light(light_id, 'on', False)

# If the bulb is off, turn it on
else:
    b.set_light(light_id, 'on', True)


