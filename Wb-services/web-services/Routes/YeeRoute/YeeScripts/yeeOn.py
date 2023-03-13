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
attributes=YeeAttributes()

power_state = bulb.get_properties()["power"]
bulb.turn_on()

sys.stdout.flush()