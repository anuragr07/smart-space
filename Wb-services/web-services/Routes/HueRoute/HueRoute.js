const express = require('express')
const router = express.Router()
const {spawn} = require('child_process')

const scriptPath = 'Routes/HueRoute/HueScripts/';

router.get('/', (req, res) => {
    // TODO: return status of the light(s) in res
})

// Turn on all lights
router.get('/allOn', (req, res) => {
    // Script path
    const allOnScriptPath = scriptPath + 'hueAllOn.py';
    
    // Script vars
    // No vars needed

    // create list of vars
    let scriptVarsList = [allOnScriptPath]
    
    // Run script
    runScript(scriptVarsList)
    .then((response) => {
        // Send Response
        res.send(response)
    })
})

// Turn off all lights
router.get('/allOff', (req, res) => {
    // Script path
    const allOffScriptPath = scriptPath + 'hueAllOff.py';
    
    // Script vars
    // No vars needed

    // create list of vars
    let scriptVarsList = [allOffScriptPath]
    
    // Run script
    runScript(scriptVarsList)
    .then((response) => {
        // Send Response
        res.send(response)
    })
    
})

// Set Color Route -
// this should set the brightness and color
router.post('/setColor', (req, res) => {
    // Script path
    const setColorScriptPath = scriptPath + 'hueColor.py';
    
    // Script vars
    const briVal = '100';
    const lightId = '1';

    // arg 1 - Brightness value, arg 2 - light id
    // create list of vars
    let scriptVarsList = [setColorScriptPath, briVal, lightId]
    
    // Run script
    runScript(scriptVarsList)
    .then((response) => {
        // Send Response
        res.send(response)
    })
})

// Toggle all lights
router.get('/toggle', (req, res) => {
    // Script path
    const toggleScriptPath = scriptPath + 'hueAllToggle.py'

    // Script vars
    // No vars needed

    // create list of vars
    let scriptVarsList = [toggleScriptPath]
    
    // Run script
    runScript(scriptVarsList)
    .then((response) => {
        // Send Response
        res.send(response)
    })
})

// Toggle one lights
router.get('/toggle/:id', (req, res) => {
    // Script path
    const toggleScriptPath = scriptPath + 'hueToggle.py'

    // Script vars
    const lightId = req.params.id;

    // create list of vars
    let scriptVarsList = [toggleScriptPath, lightId]
    
    // Run script
    runScript(scriptVarsList)
    .then((response) => {
        // Send Response
        res.send(response)
    })
})

// Turn on one light
router.post('on/:id', (req, res) => {
    // Script path
    const onScriptPath = scriptPath + 'hueOne.py'

    // Script vars
    const lightId = req.params.id;

    // create list of vars
    let scriptVarsList = [onScriptPath, lightId]
    
    // Run script
    runScript(scriptVarsList)
    .then((response) => {
        // Send Response
        res.send(response)
    })
})

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