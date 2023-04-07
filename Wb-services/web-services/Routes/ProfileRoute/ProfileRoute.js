const express = require('express')
const router = express.Router()
const ProfileController = require("../../Controllers/ProfileController")

router.get("/:id", ProfileController.getProfileByUserId)
router.get("/:id/:roomname", ProfileController.getRoomByUserId )
router.get("/:id/:roomname/:device", ProfileController.getDeviceByRoom )

// 174.6.73.177:3000/profile/1001/Kitchen/Shelly%20Plug

module.exports = router