const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000;

const uri = "mongodb+srv://arpiegrover:Arpie1996@picluster.u3qwjlc.mongodb.net/SmartSpace";

// yee router
const YeeRouter = require("./Routes/YeeRoute/YeeRoute")

// hue route
const HueRouter = require("./Routes/HueRoute/HueRoute")

// shelly router
const ShellyRouter = require("./Routes/ShellyRoute/ShellyRoute")

// user router
const UserRouter = require("./Routes/UserRoute/UserRoute")

// profile router
const ProfileRouter = require("./Routes/ProfileRoute/ProfileRoute")

// Use Routers
app.use('/yee', YeeRouter)
app.use('/hue', HueRouter)
app.use('/shelly', ShellyRouter)
app.use('/user', UserRouter)
app.use('/profile', ProfileRouter)


// Listen app and connect the DB
app.listen(PORT, function () {
    try {
        mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, ssl: true})
        console.log("DB Connected");
    } catch (error) {
        console.error(`Failed to connect to MongoDB ${error}`);
    }
    console.log(`Web services listening on port ${PORT}`);
})
