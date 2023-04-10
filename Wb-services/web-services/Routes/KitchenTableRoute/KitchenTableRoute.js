const express = require('express');
const router = express.Router();
const kitchenTableController = require('../../Controllers/KitchenTableController')

// GET route to fetch all log table entries
// router.get('/', kitchenTableController.getkitchenTable);

// GET route to get latest 3 enteries
router.get('/latest/:username', kitchenTableController.getLatestKitchenTableEntries)

// GET route to get total consumption of every user
router.get('/total', kitchenTableController.getTotalEnergyAllUsers)

// POST route to create a new log table entry
// router.post('/', kitchenTableController.createkitchenTable);

// POST request to turn off kitchen
router.post('/:username/on', kitchenTableController.turnOnKitchen)

// POST request to turn off kitchen
router.post('/:username/off', kitchenTableController.turnOffKitchen)

// PUT route to update an existing log table entry
// router.put('/:id', kitchenTableController.updatekitchenTable);

module.exports = router;
