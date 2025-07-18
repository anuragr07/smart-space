# For logging errors
import logging
logging.basicConfig()

# imports
from yeelight import Bulb
from yeelight import discover_bulbs
from Yee_Attributes import YeeAttributes
import sys

number_of_yee_bulbs=discover_bulbs()

ip_address=number_of_yee_bulbs[int(sys.argv[1])]["ip"]

bulb = Bulb(ip_address, auto_on=True)
attributes=YeeAttributes()

def changeBrightness(b):
    bulb.set_brightness(b)

bulb.turn_on()
changeBrightness(attributes.bright)

sys.stdout.flush()
