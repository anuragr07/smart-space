# import time
# import schedule
# import sys
from yeelight import discover_bulbs
from yeelight import Bulb
from Yee_Attributes import YeeAttributes
# # from pydub import AudioSegment
# # from pydub.playback import play
# from yeelight import Flow
# from yeelight import *


import yeelight
print(yeelight.__version__)

# from yeelight import SceneClass


number_of_yee_bulbs=discover_bulbs()
first_bulb=number_of_yee_bulbs[0]
ip_address=first_bulb["ip"]
print (ip_address)
bulb = Bulb(ip_address, auto_on=True)
properties = bulb.get_properties()

# rgbv=bulb.get_properties("power")

# print the properties
# print (rgbv)
print(properties)

# rgb_value = '16711680'
# red = (int(rgb_value) >> 16) & 0xff
# green = (int(rgb_value) >> 8) & 0xff
# blue = int(rgb_value) & 0xff
# rgb_list = [red, green, blue]
# print(rgb_list)
