from phue import Bridge
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

# IP address of your Philips Hue bridge
bridge_ip = os.getenv('HUE_IP')

# Create a new user (press the button on the bridge before running this)
# The first time you run this, replace "your_app_name" with a name for your app
b = Bridge(bridge_ip)
api_config=b.get_api()
username = next(iter(api_config['config']['whitelist']))

# Print the username
print(username)