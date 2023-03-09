from phue import Bridge

# IP address of your Philips Hue bridge
bridge_ip = '10.0.0.4'

# API username
api_username = 'HVmL3Zatw2OdLFfUtpfp9Em33HAoganA59w0vaDj'

# Connect to the bridge with the API username
b = Bridge(bridge_ip, username=api_username)

# Get the ID of the light you want to toggle
light_ids = [1,2,3]
print(light_ids)
for light_id in light_ids:
    light_state = b.get_light(light_id)
    # If the bulb is off, turn it on
    if light_state['state']['on']:
        b.set_light(light_id, 'on', False)
    # If the bulb is off, turn it on
    else:
        b.set_light(light_id, 'on', True)




