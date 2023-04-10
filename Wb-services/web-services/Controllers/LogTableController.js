const LogTable = require("../Model/LogTable")

// This will return latest 3 log enteries
exports.getLatestLogTableEntries = async (req, res) => {
    try {
        const username = req.params.username;
        console.log(username);
        const logTableEntries = await LogTable.find({ username: username })
            .sort({ _id: -1 })
            .limit(3);
        
        console.log(logTableEntries);
        res.status(200).json(logTableEntries);
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
            
            let consumption = item.total_energy - lastConsumption 
            energyObj = energyUsed.find(energyItem => {
                return item.username === energyItem.username
            })
            
            // Declare updated obj
            let updatedObj = {}

            if(energyObj) {
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
                updatedObj = {
                    username: item.username,
                    consumption: consumption
                }
                energyUsed.push(updatedObj)
            }
            
            lastConsumption = item.total_energy
            
        });

        // console.log(energyUsed);
        res.status(200).json(energyUsed);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
