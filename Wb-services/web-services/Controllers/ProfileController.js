const Profile = require("../Model/Profile")

exports.getProfileByUserId = async (req, res) => {
    try {
      const user_id = req.params.id;
      const profile = await Profile.findOne({ user_id: user_id });
  
      if (!profile) {
        return res.status(404).json({ error: "Profile not found" });
      }
  
      return res.json({ profile });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
};

exports.getRoomByUserId = async (req, res) => {
    try {
        const user_id = req.params.id;
        const profile = await Profile.findOne({ user_id: user_id });
    
        if (!profile) {
          return res.status(404).json({ error: "Profile not found" });
        }

        const rooms = profile.room;

        try {
            // loop for rooms
            for(let i = 0; i < rooms.length; i ++) {
                
                // To get the room using params
                if(rooms[i].room_name === req.params.roomname) {
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

        const rooms = profile.room;
        console.log(req.params.device);
        try {
            // Loop for rooms
            for(let i = 0; i < rooms.length; i ++) {
                
                // To get the room from the API call
                if(rooms[i].room_name === req.params.roomname) {
                    
                    // To get the device from the room
                    const devices = rooms[i].device;
                    for(let j = 0; j < devices.length; j++) {
                        if(devices[j].device_name === req.params.device) {
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