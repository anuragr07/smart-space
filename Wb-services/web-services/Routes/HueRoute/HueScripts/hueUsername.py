from phue import Bridge

# IP address of your Philips Hue bridge
bridge_ip = '10.0.0.4'

# Create a new user (press the button on the bridge before running this)
# The first time you run this, replace "your_app_name" with a name for your app
b = Bridge(bridge_ip)
api_config=b.get_api()
username = next(iter(api_config['config']['whitelist']))

# Print the username
print(username)