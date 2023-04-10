const Profile = require("../Model/Profile")
const API_IP='174.6.73.177:3000'
const fetch = require('node-fetch')

// const axios = require('axios')
// import axios from 'axios';

exports.getProfileByUserId = async (req, res) => {
    try {
        const user_id = req.params.id;
        const profile = await Profile.findOne({ user_id: user_id });

        if (!profile) {
            return res.status(404).json({ error: "Profile not found" });
        }

        // const rooms = profile.room;
        // try {
        //     // Loop for rooms
        //     for (let i = 0; i < rooms.length; i++) {

                
        //         // To get the device from the room
        //         const devices = rooms[i].device;

        //         for (let j = 0; j < devices.length; j++) {

        //             // switch case to go through each device available in the room
        //             switch (devices[j].device_name) {
        //                 case "Shelly Smart Plug-1": 

        //                     // This will fetch the live data and replace the device in the obj
        //                     try {
        //                         const response = await fetch(`http://${API_IP}/shelly/status/Shelly%20Smart%20Plug-1`);
        //                         const data = await response.json();
        //                         console.log(data);
        //                         devices[j] = data;

        //                     } catch (error) {
        //                         console.log(error);
        //                     }

        //                     break;

        //                 case "Shelly Smart Plug-2":
                            
        //                 // This will fetch the live data and replace the device in the obj
        //                     try {
        //                         const response = await fetch(`http://${API_IP}/shelly/status/Shelly%20Smart%20Plug-2`);
        //                         const data = await response.json();
        //                         console.log(data);
        //                         devices[j] = data;

        //                     } catch (error) {
        //                         console.log(error);
        //                     }

        //                     break;

        //                 case "Hue Light-1":
        //                     // This will fetch the live data and replace the device in the obj
        //                     try {
        //                         const response = await fetch(`http://${API_IP}/hue/props/Hue%20Light-1`);
        //                         const data = await response.json();
        //                         console.log(data);
        //                         devices[j] = data;

        //                     } catch (error) {
        //                         console.log(error);
        //                     }

        //                     break;
                        
        //                 case "Hue Light-2":
                    
        //                     // This will fetch the live data and replace the device in the obj
        //                     try {
        //                         const response = await fetch(`http://${API_IP}/hue/props/Hue%20Light-2`);
        //                         const data = await response.json();
        //                         console.log(data);
        //                         devices[j] = data;

        //                     } catch (error) {
        //                         console.log(error);
        //                     }

        //                     break;

        //                 case "Hue Light-3":
                    
        //                     // This will fetch the live data and replace the device in the obj
        //                     try {
        //                         const response = await fetch(`http://${API_IP}/hue/props/Hue%20Light-3`);
        //                         const data = await response.json();
        //                         console.log(data);
        //                         devices[j] = data;

        //                     } catch (error) {
        //                         console.log(error);
        //                     }

        //                     break;

        //                 case "Yeelight Bulb":

        //                     // This will fetch the live data and replace the device in the obj
        //                     try {
        //                         const response = await fetch(`http://${API_IP}/yee/props/Yeelight%20Bulb`);
        //                         const data = await response.json();
        //                         console.log(data);
        //                         devices[j] = data;

        //                     } catch (error) {
        //                         console.log(error);
        //                     }

        //                     break;

        //                 default: 

        //                     console.log(devices[j])
        //                     break;
        //             }
        //         }

        //         // Store devices back in profile
        //         rooms[i].device = devices
            
        //     }
        // } catch (error) {
        //    console.log({ error: error })
        // }

        // // Store rooms back in profile
        // profile.room = rooms

        // console.log(profile);

        // // const newProfile = await Profile.findOneAndUpdate({ user_id: user_id }, profile)

        return res.json({ profile });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

async function getStatusOfDevices() {
    const devices = ["hue", "yee", "shelly"];

    switch (device) {
        case "hue":
            const hueScriptPath = "../../Routes/HueRoute/HueScripts/hueGetProperties.py";


            let properties = runScript(scriptPath)
            break;

        default:
            break;
    }
}

exports.getRoomByUserId = async (req, res) => {
    try {
        const user_id = req.params.id;
        const profile = await Profile.findOne({ user_id: user_id });

        if (!profile) {
            return res.status(404).json({ error: "Profile not found" });
        }

        const rooms = profile.room;
        // try {
        //     // Loop for rooms
        //     for (let i = 0; i < rooms.length; i++) {

                
        //         // To get the device from the room
        //         const devices = rooms[i].device;

        //         for (let j = 0; j < devices.length; j++) {

        //             // switch case to go through each device available in the room
        //             switch (devices[j].device_name) {
        //                 case "Shelly Smart Plug-1": 

        //                     // This will fetch the live data and replace the device in the obj
        //                     try {
        //                         const response = await fetch(`http://${API_IP}/shelly/status/Shelly%20Smart%20Plug-1`);
        //                         const data = await response.json();
                                
        //                         devices[j] = data;

        //                     } catch (error) {
        //                         console.log(error);
        //                     }

        //                     break;

        //                 case "Shelly Smart Plug-2":
                            
        //                 // This will fetch the live data and replace the device in the obj
        //                     try {
        //                         const response = await fetch(`http://${API_IP}/shelly/status/Shelly%20Smart%20Plug-2`);
        //                         const data = await response.json();
                                
        //                         devices[j] = data;

        //                     } catch (error) {
        //                         console.log(error);
        //                     }

        //                     break;

        //                 case "Hue Light-1":
        //                     // This will fetch the live data and replace the device in the obj
        //                     try {
        //                         const response = await fetch(`http://${API_IP}/hue/props/Hue%20Light-1`);
        //                         const data = await response.json();
                                
        //                         devices[j] = data;

        //                     } catch (error) {
        //                         console.log(error);
        //                     }

        //                     break;
                        
        //                 case "Hue Light-2":
                    
        //                     // This will fetch the live data and replace the device in the obj
        //                     try {
        //                         const response = await fetch(`http://${API_IP}/hue/props/Hue%20Light-2`);
        //                         const data = await response.json();
                                
        //                         devices[j] = data;

        //                     } catch (error) {
        //                         console.log(error);
        //                     }

        //                     break;

        //                 case "Hue Light-3":
                    
        //                     // This will fetch the live data and replace the device in the obj
        //                     try {
        //                         const response = await fetch(`http://${API_IP}/hue/props/Hue%20Light-3`);
        //                         const data = await response.json();
                                
        //                         devices[j] = data;

        //                     } catch (error) {
        //                         console.log(error);
        //                     }

        //                     break;

        //                 case "Yeelight Bulb":

        //                     // This will fetch the live data and replace the device in the obj
        //                     try {
        //                         const response = await fetch(`http://${API_IP}/yee/props/Yeelight%20Bulb`);
        //                         const data = await response.json();
                                
        //                         devices[j] = data;

        //                     } catch (error) {
        //                         console.log(error);
        //                     }

        //                     break;

        //                 default: 

        //                     console.log(devices[j])
        //                     break;
        //             }
        //         }

        //         // Store devices back in profile
        //         rooms[i].device = devices

        //         console.log(devices);
        //         // To get the room using params
        //         if (rooms[i].room_name === req.params.roomname) {
        //             return res.json(rooms[i])
        //         }
            
        //     }
        // } catch (error) {
        //    console.log({ error: error })
        // }

        // Store this profile on db

        try {
            // loop for rooms
            for (let i = 0; i < rooms.length; i++) {

                // To get the room using params
                if (rooms[i].room_name === req.params.roomname) {
                    return res.json(rooms[i])
                }
            }
        } catch (error) {
            return res.status(404).json({ eror: error })
        }


        // return res.json({ profile });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}


exports.getDeviceByRoom = async (req, res) => {
    try {
        const user_id = req.params.id;
        const profile = await Profile.findOne({ user_id: user_id });

        if (!profile) {
            return res.status(404).json({ error: "Profile not found" });
        }

        // const rooms = profile.room;
        // try {
        //     // Loop for rooms
        //     for (let i = 0; i < rooms.length; i++) {

                
        //         // To get the device from the room
        //         const devices = rooms[i].device;

        //         for (let j = 0; j < devices.length; j++) {

        // //             // switch case to go through each device available in the room
        // //             switch (devices[j].device_name) {
        //                 case "Shelly Smart Plug-1": 

        //                     // This will fetch the live data and replace the device in the obj
        //                     try {
        //                         const response = await fetch(`http://${API_IP}/shelly/status/Shelly%20Smart%20Plug-1`);
        //                         const data = await response.json();
                                
        //                         devices[j] = data;

        //                     } catch (error) {
        //                         console.log(error);
        //                     }

        //                     break;

        //                 case "Shelly Smart Plug-2":
                            
        //                 // This will fetch the live data and replace the device in the obj
        //                     try {
        //                         const response = await fetch(`http://${API_IP}/shelly/status/Shelly%20Smart%20Plug-2`);
        //                         const data = await response.json();
                                
        //                         devices[j] = data;

        //                     } catch (error) {
        //                         console.log(error);
        //                     }

        //                     break;

        //                 case "Hue Light-1":
        //                     // This will fetch the live data and replace the device in the obj
        //                     try {
        //                         const response = await fetch(`http://${API_IP}/hue/props/Hue%20Light-1`);
        //                         const data = await response.json();
                                
        //                         devices[j] = data;

        //                     } catch (error) {
        //                         console.log(error);
        //                     }

        //                     break;
                        
        //                 case "Hue Light-2":
                    
        //                     // This will fetch the live data and replace the device in the obj
        //                     try {
        //                         const response = await fetch(`http://${API_IP}/hue/props/Hue%20Light-2`);
        //                         const data = await response.json();
                                
        //                         devices[j] = data;

        //                     } catch (error) {
        //                         console.log(error);
        //                     }

        //                     break;

        //                 case "Hue Light-3":
                    
        //                     // This will fetch the live data and replace the device in the obj
        //                     try {
        //                         const response = await fetch(`http://${API_IP}/hue/props/Hue%20Light-3`);
        //                         const data = await response.json();
                                
        //                         devices[j] = data;

        //                     } catch (error) {
        //                         console.log(error);
        //                     }

        //                     break;

        //                 case "Yeelight Bulb":

        //                     // This will fetch the live data and replace the device in the obj
        //                     try {
        //                         const response = await fetch(`http://${API_IP}/yee/props/Yeelight%20Bulb`);
        //                         const data = await response.json();
                                
        //                         devices[j] = data;

        //                     } catch (error) {
        //                         console.log(error);
        //                     }

        //                     break;

        //                 default: 

        //                     console.log(devices[j])
        //                     break;
        //             }
        //         }

        //         // Store devices back in profile
        //         rooms[i].device = devices            
        //     }
        // } catch (error) {
        //    console.log({ error: error })
        // }

        const rooms = profile.room;
        console.log(req.params.device);
        try {
            // Loop for rooms
            for (let i = 0; i < rooms.length; i++) {

                // To get the room from the API call
                if (rooms[i].room_name === req.params.roomname) {

                    // To get the device from the room
                    const devices = rooms[i].device;
                    for (let j = 0; j < devices.length; j++) {
                        if (devices[j].device_name === req.params.device) {
                            res.status(200).json(devices[j]);
                        }
                    }
                }
            }
        } catch (error) {
            return res.status(404).json({ eror: error })
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

exports.updateDeviceStatus = async (req, res) => {
    try {
        const user_id = req.params.id;
        const profile = await Profile.findOne({ user_id: user_id });

        if (!profile) {
            return res.status(404).json({ error: "Profile not found" });
        }

        const rooms = profile.room;
        console.log(req.params.device);
        try {
            // Loop for rooms
            for (let i = 0; i < rooms.length; i++) {

                // To get the room from the API call
                if (rooms[i].room_name === req.params.roomname) {

                    // To get the device from the room
                    const devices = rooms[i].device;
                    for (let j = 0; j < devices.length; j++) {
                        if (devices[j].device_name === req.params.device) {

                            let ourDevice = devices[j]

                            // update the status of the device
                            if (req.params.status === "Off") ourDevice.status = "Off" // Add ignore case as well
                            if (req.params.status === "On") ourDevice.status = "On"
                            if (req.params.status === "toggle") {
                                if (ourDevice.status === "Off") ourDevice.status = "On"
                                else ourDevice.status = "Off"
                            }
                            // res.status(200).json(devices[j]);

                            // Update the profile object over here
                            devices[j] = ourDevice
                            rooms[i].device = devices
                            profile.room = rooms

                            // Update the data using mongoose
                            Profile.findByIdAndUpdate(profile._id, profile, function (err, profile) {
                                if (err) return res.status(500).send({ response: false });
                            });

                            res.status(200).json({ status: ourDevice.status })
                        }
                    }
                }
            }
        } catch (error) {
            return res.status(404).json({ eror: error })
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

// Run the python script
function runScript(scriptParamsList) {
    return new Promise((resolve, reject) => {
        const script = spawn('python', scriptParamsList);
        let responseFromScript = '';

        script.stdout.on('data', (data) => {
            responseFromScript += data.toString();
        });

        script.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
            reject(data);
        });

        script.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
            resolve(responseFromScript);
        });
    });
}