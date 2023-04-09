const express = require('express')
const router = express.Router()
const {spawn} = require('child_process')

const scriptPath = 'Routes/ShellyRoute/ShellyScripts/';

// ------ Code to run the shelly scripts -------
router.get('/', (req, res) => {
    // this is to get the status of the light
    // might include some data as well in it
    
})

// TODO: Use these funcions along with the id of the device from db
// ---------------- TURN ON/OFF ---------------------
router.get('/toggle', (req, res) => {
    // Script path
    const toggleScriptPath = scriptPath + 'ShellyToggle.py'

    // Script vars
    // const lightId = req.params.id;
    
    // create list of vars
    let scriptVarsList = [toggleScriptPath]
    
    // Run script
    runScript(scriptVarsList)
    .then((response) => {
        // Send Response
        res.send(response)
    })
})

router.post('/on', (req, res) => {
    // Script path
    const turnOnScriptPath = scriptPath + 'ShellyOn.py'

    // Script vars
    // const lightId = req.params.id;
    
    // create list of vars
    let scriptVarsList = [turnOnScriptPath]
    
    // Run script
    runScript(scriptVarsList)
    .then((response) => {
        // Send Response
        res.send(response)
    })    
})

router.post('/off', (req, res) => {
    // Script path
    const turnOffScriptPath = scriptPath + 'ShellyOff.py'

    // Script vars
    // const lightId = req.params.id;
    
    // create list of vars
    let scriptVarsList = [turnOffScriptPath]
    
    // Run script
    runScript(scriptVarsList)
    .then((response) => {
        // Send Response
        res.send(response)
    })    
})

router.get('/printLines', (req, res) => {
    // Script path
    const turnOffScriptPath = scriptPath + 'ShellyEnergy.py'

    // Script vars
    // const lightId = req.params.id;
    
    // create list of vars
    let scriptVarsList = [turnOffScriptPath]
    
    // Run script
    runScript(scriptVarsList)
    .then((response) => {
        // Send Response
        res.send(response)
    })
})

// Change this according to the id passed
router.get('/status', (req, res) => {
    // Script path
    const configScriptPath = scriptPath + 'ShellyConfigStatus.py'

    // Script vars
    let scriptVarsList = [configScriptPath]

    // Run script
    runScript(scriptVarsList)
    .then((response) => {
        // Send response
        res.setHeader('Content-Type', 'application/json')
        res.send(response)
    })
})
// ------------------- TURN ON/OFF ENDS ---------------


// Run the python script
function runScript(scriptParamsList) {
    return new Promise((resolve, reject) => {
      const script = spawn('python', scriptParamsList);
      let responseFromScript = '';
  
      script.stdout.on('data', (data) => {
        responseFromScript += data.toString();
      });
  
      script.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
        reject(data);
      });
  
      script.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        resolve(responseFromScript);
      });
    });
}


module.exports = router