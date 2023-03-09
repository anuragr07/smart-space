from yeelight import *
from yeelight import discover_bulbs
from Yee_Attributes import YeeAttributes

number_of_yee_bulbs=discover_bulbs()
first_bulb=number_of_yee_bulbs[0]
ip_address=first_bulb["ip"] 
bulb = Bulb(ip_address, auto_on=True)
attributes=YeeAttributes()

bulb.turn_on()

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
bulbFlow()