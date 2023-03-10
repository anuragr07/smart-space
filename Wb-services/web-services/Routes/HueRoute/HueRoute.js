const express = require('express')
const router = express.Router()
const {spawn} = require('child_process')

const scriptPath = 'Routes/HueRoute/HueScripts/';

router.get('/', (req, res) => {
    // TODO: return status of the light(s) in res
})

router.get('/toggle', (req, res) => {
    // TODO: Turn on/off the light(S)
    // TODO: return the status of the light(s)
    let responseFromScript;

    // Arguments values
    // change these values to dynamic using the request params
    const briVal = '20';
    const lightId = '1'

    const offScriptPath = scriptPath + 'hueAllToggle.py';

    // arg 1 - Brightness value, arg 2 - light id
    const script = spawn('python', [offScriptPath, briVal, lightId]);

    script.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        responseFromScript=data;
    });

    script.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    script.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        
        const obj = {
            response: String(responseFromScript)
        }
        res.send(obj)
    });
    
})

router.get('/allOn', (req, res) => {
    
    let data1;
    const onScriptPath = scriptPath + 'hueAllOn.py';
    const script = spawn('python', [onScriptPath]);

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

router.get('/allOff', (req, res) => {
    let data1;
    const offScriptPath = scriptPath + 'hueAllOff.py';
    const script = spawn('python', [offScriptPath]);

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

router.post('/setColor', (req, res) => {
    // Script path
    const setColorScriptPath = scriptPath + 'hueColor.py';
    
    // Script vars
    const briVal = '20';
    const lightId = '1';

    // create list of vars
    let scriptVarsList = [offScriptPath, briVal, lightId]
    
    // Run script
    response = runScript(scriptVarsList);
    
    // Send response
    res.send(response);
})

// router.post('/setColor', (req, res) => {
//     // TODO: receive attributes from the req
//     // TODO: Set color of the light(s)
//     let responseFromScript;

//     // Arguments values
//     // change these values to dynamic using the request params
//     const briVal = '20';
//     const lightId = '1'

//     const offScriptPath = scriptPath + 'hueColor.py';

//     // arg 1 - Brightness value, arg 2 - light id
//     const script = spawn('python', [offScriptPath, briVal, lightId]);

//     script.stdout.on('data', (data) => {
//         console.log(`stdout: ${data}`);
//         responseFromScript=data;
//     });

//     script.stderr.on('data', (data) => {
//         console.error(`stderr: ${data}`);
//     });

//     script.on('close', (code) => {
//         console.log(`child process exited with code ${code}`);
        
//         const obj = {
//             response: String(responseFromScript)
//         }
//         res.send(obj)
//     });
// })

// We'll use this function for every request
// function runScript() {
//     let responseFromScript;

//     // Arguments values
//     // change these values to dynamic using the request params
//     const briVal = '20';
//     const lightId = '1'

//     const offScriptPath = scriptPath + 'hueColor.py';

//     // arg 1 - Brightness value, arg 2 - light id
//     const script = spawn('python', [offScriptPath, briVal, lightId]);

//     script.stdout.on('data', (data) => {
//         console.log(`stdout: ${data}`);
//         responseFromScript=data;
//     });

//     script.stderr.on('data', (data) => {
//         console.error(`stderr: ${data}`);
//     });

//     script.on('close', (code) => {
//         console.log(`child process exited with code ${code}`);
        
//         const obj = {
//             response: String(responseFromScript)
//         }
//         res.send(obj)
//     });
// }

function runScript(scriptParamsList) {
    let responseFromScript;

    // arg 1 - Brightness value, arg 2 - light id
    const script = spawn('python', scriptParamsList);

    script.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        responseFromScript=data;
    });

    script.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    script.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        
        const obj = {
            response: String(responseFromScript)
        }
        res.send(obj)
    });
}

module.exports = router