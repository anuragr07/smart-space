# For logging errors
import logging
logging.basicConfig()

# Imports
import sys
from phue import Bridge

# IP address of your Philips Hue bridge
bridge_ip = '10.0.0.3'

# API username
api_username = 'HVmL3Zatw2OdLFfUtpfp9Em33HAoganA59w0vaDj'

# Connect to the bridge with the API username
b = Bridge(bridge_ip, username=api_username)

# Get the ID of the light you want to control
# light_id = 1
light_id = int(sys.argv[2])

# Set the brightness to 50%
# b.set_light(light_id, 'bri', 25)
b.set_light(light_id, 'bri', int(sys.argv[1]))

# Set the color to red (using xy coordinates)
# b.set_light(light_id, 'xy', [0.675, 0.322])

print(type(light_id))

sys.stdout.flush()