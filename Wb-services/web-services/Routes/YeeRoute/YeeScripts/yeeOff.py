# For logging errors
import logging
logging.basicConfig()

# imports
import sys
from yeelight import Bulb
from yeelight import discover_bulbs
from Yee_Attributes import YeeAttributes

number_of_yee_bulbs=discover_bulbs()
# first_bulb=number_of_yee_bulbs[0]
# ip_address=first_bulb["ip"] 

ip_address = number_of_yee_bulbs[int(sys.argv[1])]

bulb = Bulb(ip_address, auto_on=True)

power_state = bulb.get_properties()["power"]
bulb.turn_off()

sys.stdout.flush()