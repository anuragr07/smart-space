import time
import schedule
import sys
from yeelight import discover_bulbs
from yeelight import Bulb
from Yee_Attributes import YeeAttributes
# from pydub import AudioSegment
# from pydub.playback import play
from yeelight import Flow
from yeelight import *


import yeelight
print(yeelight.__version__)

from yeelight import SceneClass


number_of_yee_bulbs=discover_bulbs()
first_bulb=number_of_yee_bulbs[0]
ip_address=first_bulb["ip"]
attributes=YeeAttributes()

bulb = Bulb(ip_address, auto_on=True)

def findBulbs():
    list=discover_bulbs()
    print(list)

def setColor(x):
    bulb.set_rgb(x[0], x[1], x[2])

def toggleSwitch():
    power_state = bulb.get_properties()["power"]

    # If the bulb is on, turn it off
    if power_state == "on":
        bulb.turn_off()
    # If the bulb is off, turn it on
    else:
        bulb.turn_on()

def changeBrightness(b):
    bulb.set_brightness(b)

def yeeSleep(x):
    time.sleep(x * 60)
    bulb.turn_off()

def setDefualt():
    bulb.set_default()

def bulbFlow():
    transitions = [
        TemperatureTransition(1700, duration=1000),
        SleepTransition(duration=1000),
        TemperatureTransition(6500, duration=1000)
    ]

    flow = Flow(
        count=2,
        action=Flow.actions.recover,
        transitions=transitions
    )
    bulb.start_flow(flow)

def bulbScene(x):
    bulb.set_scene("romantic")

scene = SceneClass().color_flow(1, 0, "1000,2,2700,100,500,1,255,10,500,1,16711680,100")

# apply the scene to the bulb
bulb.start_flow(scene)

print(attributes.rgbv)
sys.stdout.flush()



# findBulbs()
setColor(attributes.rgbv)
# changeBrightness(attributes.bright)
# setDefualt()
#bulbScene(attributes.scene)
#  bulb.set_scene("romantic")
# bulbFlow()
# setColorFlow()
#yeeSleep(1)

