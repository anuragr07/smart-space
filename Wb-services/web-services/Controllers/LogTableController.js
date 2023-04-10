const LogTable = require("../Model/LogTable")

// This will return latest 3 log enteries
exports.getLatestLogTableEntries = async (req, res) => {
    try {
        const totalConsumption = await LogTable.find()
        let consumptionList = []
        let lastConsumption = 0;

        totalConsumption.forEach((item, i) => {
            
            // User's current consumption
            let consumption = item.total_energy - lastConsumption 
            
            if(item.username === req.params.username) {
                console.log("Total:" + item.username + " = " + consumption);
                energyObj = {
                    username: item.username,
                    consumption: consumption
                }

                // Append the obj to the list
                consumptionList.push(energyObj)
            }

            // Store last user's consumption
            lastConsumption = item.total_energy
        });

        const latestEnteries = consumptionList.slice(-3)

        // console.log(energyUsed);
        res.status(200).json(latestEnteries);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// 
exports.getTotalEnergyAllUsers = async (req, res) => {
    try {
        const totalConsumption = await LogTable.find()
        let energyUsed = []
        let energyObj = {}
        let lastConsumption = 0;

        totalConsumption.forEach((item, i) => {
            
            // User's current consumption
            let consumption = item.total_energy - lastConsumption 
            
            // Find user's obj
            energyObj = energyUsed.find(energyItem => {
                return item.username === energyItem.username
            })
            
            // Declare updated obj
            let updatedObj = {}

            // Check and update the obj with consumption
            if(energyObj) {
                // Update object
                energyUsed = energyUsed.map(obj => {
                    if(energyObj.username === obj.username){
                        return {
                            ...obj,
                            consumption: obj.consumption + consumption
                        }
                    } else {
                        return obj
                    }                        
                })
            } else {

                // Return new opject
                updatedObj = {
                    username: item.username,
                    consumption: consumption
                }
                energyUsed.push(updatedObj)
            }
            
            // Store last user's consumption
            lastConsumption = item.total_energy
        });

        // console.log(energyUsed);
        res.status(200).json(energyUsed);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
