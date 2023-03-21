const express = require('express')
const router = express.Router()
const {spawn} = require('child_process')

const scriptPath = 'Routes/YeeRoute/YeeScripts/';

// --- Code to run the scripts ---
router.get('/', (req, res) => {
    // this is to get the status of the light
    // might include some data as well in it
    
})

router.get('/toggle/:id', (req, res) => {
    // Script path
    const toggleScriptPath = scriptPath + 'yeeToggle.py'

    // Script vars
    const lightId = req.params.id;
    
    // create list of vars
    let scriptVarsList = [toggleScriptPath, lightId]
    
    // Run script
    response = runScript(scriptVarsList);
    
    // Send response
    res.send(response);
})

router.post('/setColor/:id', (req, res) => {
    // Script path
    const changeColorScriptPath = scriptPath + 'yeeColorChange.py'
    
    // Script vars
    const lightId = req.params.id;
    const rgbv = [255, 255, 0]
    
    // create list of vars
    let scriptVarsList = [changeColorScriptPath, lightId, rgbv]
    
    // Run script
    response = runScript(scriptVarsList);
    
    // Send response
    res.send(response);
})

router.post('/setBrightness/:id', (req, res) => {
    // Script path
    const brightnessScriptPath = scriptPath + 'yeeToggle.py'
    
    // Script vars
    const lightId = req.params.id;
    const bright = [255, 255, 0]
    
    // create list of vars
    let scriptVarsList = [brightnessScriptPath, lightId, bright]
    
    // Run script
    response = runScript(scriptVarsList);
    
    // Send response
    res.send(response);
})

router.post('/setScene', (req, res) => {

    // run the script to set scene of the room

})



// This code will be used to get the status of specific yee light, with id
router.get('/:id', (req, res) => {
    let id = req.params.id;

    // do stuff with the id of the yee light


})

// Run the python script
function runScript(scriptParamsList) {
    let responseFromScript;

    const script = spawn('python', scriptParamsList);

    script.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        responseFromScript=data;
    });

    script.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    let obj;

    script.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        
        obj = {
            response: String(responseFromScript)
        }
        
    });

    return obj;
}



// --- Code for CRUD operations of the yee light ---


module.exports = router