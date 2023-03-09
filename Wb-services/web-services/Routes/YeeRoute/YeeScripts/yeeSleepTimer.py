from yeelight import Bulb
from yeelight import discover_bulbs
from Yee_Attributes import YeeAttributes
import time
number_of_yee_bulbs=discover_bulbs()
first_bulb=number_of_yee_bulbs[0]
ip_address=first_bulb["ip"] 
bulb = Bulb(ip_address, auto_on=True)
attributes=YeeAttributes()


def yeeSleep(x):
    time.sleep(x * 60)
    bulb.turn_off()

bulb.turn_on()
yeeSleep(0.1)

