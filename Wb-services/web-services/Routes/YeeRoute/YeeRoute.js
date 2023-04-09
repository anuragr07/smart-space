const express = require('express')
const router = express.Router()
const {spawn} = require('child_process')

const scriptPath = 'Routes/YeeRoute/YeeScripts/';

// --- Code to run the scripts ---
router.get('/', (req, res) => {
    // this is to get the status of the light
    // might include some data as well in it
    
})

router.get('/toggle', (req, res) => {
    // Script path
    const toggleScriptPath = scriptPath + 'yeeToggle.py'

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

router.get('/props/:name', (req, res) => {
  // Script path
  const getPropsScriptPath = scriptPath + 'yeeGetProperties.py'

  // Script vars
  const lightName = req.params.name
  
  // create list of vars
  let scriptVarsList = [getPropsScriptPath, lightName]
  
  // Run script
  runScript(scriptVarsList)
  .then((response) => {
      // Send Response
      res.setHeader('Content-Type', 'application/json')
      res.send(response)
  })
})

router.post('/setColor', (req, res) => {
    // Script path
    const changeColorScriptPath = scriptPath + 'yeeColorChange.py'
    
    // Script vars
    // const lightId = req.params.id;
    const rgbv = [255, 255, 0]
    
    // create list of vars
    let scriptVarsList = [changeColorScriptPath, rgbv]
    
    // Run script
    runScript(scriptVarsList)
    .then((response) => {
        // Send Response
        res.send(response)
    })
})

router.post('/setBrightness', (req, res) => {
    // Script path
    const brightnessScriptPath = scriptPath + 'yeeBrightnessChange.py'
    
    // Script vars
    // const lightId = req.params.id;
    const bright = [255, 255, 0]
    
    // create list of vars
    let scriptVarsList = [brightnessScriptPath, bright]
    
    // Run script
    runScript(scriptVarsList)
    .then((response) => {
        // Send Response
        res.send(response)
    })
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
    return new Promise((resolve, reject) => {
      const script = spawn('python3', scriptParamsList);
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


// --- Code for CRUD operations of the yee light ---


module.exports = router