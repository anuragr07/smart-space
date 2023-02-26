const express = require('express')
const router = express.Router()
const spawn = require("child_process").spawn;

let yee_status = "on";

router.get('/', (req, res) => {
    // res.json({ msg: yee_status})
    
})

router.get('/toggle', (req, res) => {
    if(yee_status == "on") yee_status = "off";
    else yee_status = "on"

    // run the toggle light function from py script

    res.json({msg: yee_status})
})

module.exports = router