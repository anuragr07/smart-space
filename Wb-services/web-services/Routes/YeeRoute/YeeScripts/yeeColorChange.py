# For logging errors
import logging
logging.basicConfig()

# Imports
import sys
from yeelight import Bulb
from yeelight import discover_bulbs
from Yee_Attributes import YeeAttributes

number_of_yee_bulbs=discover_bulbs()

# first_bulb=number_of_yee_bulbs[0]
# ip_address=first_bulb["ip"] 

ip_address=number_of_yee_bulbs[int(sys.argv[1])]["ip"]

bulb = Bulb(ip_address, auto_on=True)
attributes=YeeAttributes()

def setColor(x):
    bulb.set_rgb(x[0], x[1], x[2])

bulb.turn_on()
# setColor(attributes.rgbv)

setColor(sys.argv[2])

sys.stdout.flush()
