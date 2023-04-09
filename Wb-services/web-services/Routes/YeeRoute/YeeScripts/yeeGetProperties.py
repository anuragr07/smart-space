# import time
# import schedule
# import sys
from yeelight import discover_bulbs
from yeelight import Bulb
from Yee_Attributes import YeeAttributes
import json
# # from pydub import AudioSegment
# # from pydub.playback import play
# from yeelight import Flow
# from yeelight import *


import yeelight
print(yeelight.__version__)

# convert rgb to rgbv
def getRGBList(rgb_string):
    red = int(rgb_string[0:2], 16)
    green = int(rgb_string[2:4], 16)
    blue = int(rgb_string[4:6], 16)
    return [red, green, blue]


number_of_yee_bulbs=discover_bulbs()
first_bulb=number_of_yee_bulbs[0]
ip_address=first_bulb["ip"]
print (ip_address)
bulb = Bulb(ip_address, auto_on=True)
properties = bulb.get_properties()

# rgbv=bulb.get_properties("power")

status = ""
if properties["power"] == "on":
    status = "On"
else:
    status = "Off"

props = {
    "device_id": 6,
    "device_name": "Yeelight Bulb",
    "status": status,
    "ip": ip_address,
    "settings": {
        "Brightness": properties["bright"],
        "rgbv": getRGBList(properties["rgb"])
    } 
}

json_object = json.dumps(props)
print(json_object)
