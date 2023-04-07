# imports
from yeelight import discover_bulbs
from yeelight import Bulb
from Yee_Attributes import YeeAttributes
import sys

# For env variable
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

# For logging errors
import logging
logging.basicConfig()


number_of_yee_bulbs=discover_bulbs()

print(len(number_of_yee_bulbs))

# first_bulb=number_of_yee_bulbs[0]
# ip_address=first_bulb["ip"] 

ip_address=os.getenv('YEE_IP')

# ip_address=number_of_yee_bulbs[int(sys.argv[1])]["ip"]

bulb = Bulb(ip_address, auto_on=True)

power_state = bulb.get_properties()["power"]

    # If the bulb is on, turn it off
if power_state == "on":
        bulb.turn_off()
    # If the bulb is off, turn it on
else:
        bulb.turn_on()

print(power_state)

sys.stdout.flush()