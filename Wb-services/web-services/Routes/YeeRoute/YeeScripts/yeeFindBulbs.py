from yeelight import discover_bulbs

def findBulbs():
    list=discover_bulbs()
    print(len(list))

findBulbs()
