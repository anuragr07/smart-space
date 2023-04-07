const express = require('express')
const router = express.Router()
const ProfileController = require("../../Controllers/ProfileController")

router.get("/:id", ProfileController.getProfileByUserId)
router.get("/:id/:roomname", ProfileController.getRoomByUserId )
router.get("/:id/:roomname/:device", ProfileController.getDeviceByRoom )

// {ip_address}:3000/profile/1001/Kitchen/Shelly%20Plug

// update status of the device
router.post("/:id/:roomname/:device/:status", ProfileController.updateDeviceStatus)

// Shelly
// Hue
// Yee
// - color, brightness, color temp
// on/off
// ip

module.exports = router