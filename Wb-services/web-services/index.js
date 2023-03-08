const express = require('express')
const app = express()
const {spawn} = require('child_process')


// ------------- Node module yeelight testing -----------------
const {Yeelight} = require('node-yeelight-wifi');

const { Client } = require('yeelight-node')


let yee_status = "on";

const deviceIp = '10.0.0.2';

// const yeelight = new Yeelight({ip: deviceIp});

// app.get('/', (req, res) => {

    // yeelight.connect()
    // .then(() => {
    // yeelight.setPower(true)
    //     .then(() => {
    //     console.log('Yeelight bulb turned on');
    //     yeelight.disconnect();
    //     })
    //     .catch((error) => {
    //         res.send(`Failed to turn on Yeelight bulb: ${error}`);
    //     yeelight.disconnect();
    //     });
    // })
    // .catch((error) => {
    //     res.send(`Failed to connect to Yeelight bulb: ${error}`);
    // });

    // const client = new Client()

    // client.bind(yeelight => {
    // yeelight.set_power('off')
    // // .then(yeelight.set_rgb([255, 0, 0]))
    // // .then(yeelight.closeConnection())
    // yeelight.set_rgb([255, 0, 0])

    // yeelight.get_prop('bright').then(
    //     data => console.log(data)
    // )

    

    // res.send(client)

// })


// ----------------node module testing ends here --------------

// ---- Get function to run python script for yeelight ----
app.get('/1', (req,res) => {

    var dataToSend;

    const python = spawn('python', ['hue2_all_on.py'])

    python.stdout.on('data', function (data) {
        console.log("Hello")
        dataToSend = data.toString();
    })

    python.on('close', (code) => {
        console.log(`child process closed with codes ${code}`);
        res.send(dataToSend)
    })
})

app.get('/', (req, res) => {
    let data1;
    const script = spawn('python3', ['tryFinal.py']);

    script.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    data1=data;
    });

    script.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
    });

    script.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    res.send("Hello1")
    });
})

// yee routes
app.get('/yee', (req, res) => {
    res.json({ msg: yee_status})
})

app.post('/yee', (req, res) => {
    if(yee_status == "on") yee_status = "off";
    else yee_status = "on"

    // run the toggle light function from py script

    res.json({msg: yee_status})
})

// hue routes

const YeeRouter = require("./Routes/YeeRoute/YeeRoute")
const HueRouter = require("./Routes/HueRoute/HueRoute")

app.use('/yee', YeeRouter)
app.use('/hue', HueRouter)

app.listen(3000)