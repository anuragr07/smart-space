# For logging errors
import logging
logging.basicConfig()

# imports
from yeelight import Bulb
from yeelight import discover_bulbs
from Yee_Attributes import YeeAttributes
import sys

number_of_yee_bulbs=discover_bulbs()

# first_bulb=number_of_yee_bulbs[0]
# ip_address=first_bulb["ip"] 

ip_address=number_of_yee_bulbs[int(sys.argv[1])]["ip"]

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