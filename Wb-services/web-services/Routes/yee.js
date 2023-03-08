const express = require('express')
const router = express.Router()
const spawn = require("child_process").spawn;

let yee_status = "on";

// --- Code to run the scripts ---
// This code is to get the status of only 1 light
router.get('/', (req, res) => {
    // this is to get the status of the light
    // might include some data as well in it

    





    // const pythonOne = spawn('python3', ['tryFinal.py'])
    // let data1;
    // pythonOne.stdout.on('data', function(data) {
    //     // data return
    //     data1 = data.toString();
    // })

    // pythonOne.on('close', (code) => {
    //     console.log("code", code)
    //     res.send(data1)
    // })

    // To send the yee light status
    // res.json({ msg: yee_status})
    
})

router.post('/toggle', (req, res) => {
    if(yee_status == "on") yee_status = "off";
    else yee_status = "on"

    // run the toggle light function from py script

    res.json({msg: yee_status})
})

router.post('/setColor', (req, res) => {

    // run the script to set the color

})

router.post('/setBrightness', (req, res) => {

    // run the script to set bvrightness
})

router.post('/setScene', (req, res) => {

    // run the script to set scene of the room

})



router.post('')

// This code will be used to get the status of specific yee light, with id
router.get('/:id', (req, res) => {
    let id = req.params.id;

    // do stuff with the id of the yee light


})



// --- Code for CRUD operations of the yee light ---


module.exports = router