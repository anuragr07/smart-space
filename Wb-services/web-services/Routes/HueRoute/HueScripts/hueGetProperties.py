from phue import Bridge
import os
from dotenv import load_dotenv, find_dotenv
import sys

load_dotenv(find_dotenv())

# IP address of your Philips Hue bridge
bridge_ip = os.getenv('HUE_IP')

# API username
api_username = 'HVmL3Zatw2OdLFfUtpfp9Em33HAoganA59w0vaDj'

# Connect to the bridge with the API username
b = Bridge(bridge_ip, username=api_username)

# Get the ID of the light you want to turn on
lights=b.get_light_objects()

lightList=[]
props="";
lightName = sys.argv[1]
printFlag = False

try:
    # Print the properties of each light
    for light in lights:    
        props = ""
        props = props + "{name:" + light.name
        props = props + ",status:" + str(light.on)
        props = props + ",brightness:" + str(light.brightness)
        props = props + ",color_x:" + str(light.xy[0])
        props = props + ",color_y:" + str(light.xy[1])
        props = props + ",light_id: " + str(light.light_id) + "}"
        
        if light.name == lightName:
            print(props)
            printFlag = True
        else:
            lightList.append(props)
        
    if printFlag == False:
        print(lightList)


except Exception as e:
    # Handle the error here
    print(f"Error occurred: {e}")
