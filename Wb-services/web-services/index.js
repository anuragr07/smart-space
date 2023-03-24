const express = require('express')
const app = express()



// yee route
const YeeRouter = require("./Routes/YeeRoute/YeeRoute")

// hue route
const HueRouter = require("./Routes/HueRoute/HueRoute")

// shelly router
const ShellyRouter = require("./Routes/ShellyRoute/ShellyRoute")

app.use('/yee', YeeRouter)
app.use('/hue', HueRouter)
app.use('/shelly', ShellyRouter)

app.listen(3000)