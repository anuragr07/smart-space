const express = require('express')
const app = express()

let yee_status = "on";

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

const yeeRouter = require("./routes/yee")

app.use('/yee', yeeRouter)

app.listen(3000)