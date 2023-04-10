const express = require('express');
const router = express.Router();
const kitchenTableController = require('../../Controllers/KitchenTableController')

// GET route to get latest 3 enteries
router.get('/latest/:username', kitchenTableController.getLatestKitchenTableEntries)

// GET route to get total consumption of every user
router.get('/total', kitchenTableController.getTotalEnergyAllUsers)

// POST request to turn off kitchen
router.post('/:username/on', kitchenTableController.turnOnKitchen)

// POST request to turn off kitchen
router.post('/:username/off', kitchenTableController.turnOffKitchen)

module.exports = router;
