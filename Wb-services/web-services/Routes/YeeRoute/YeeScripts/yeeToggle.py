from yeelight import Bulb
from yeelight import discover_bulbs
from Yee_Attributes import YeeAttributes

number_of_yee_bulbs=discover_bulbs()
first_bulb=number_of_yee_bulbs[0]
ip_address=first_bulb["ip"] 
bulb = Bulb(ip_address, auto_on=True)

power_state = bulb.get_properties()["power"]

    # If the bulb is on, turn it off
if power_state == "on":
        bulb.turn_off()
    # If the bulb is off, turn it on
else:
        bulb.turn_on()

