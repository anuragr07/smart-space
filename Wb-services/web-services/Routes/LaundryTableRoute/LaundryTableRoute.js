const express = require('express');
const router = express.Router();
const laundryTableController = require('../../Controllers/LaundryTableController')

// GET route to get latest 3 enteries
router.get('/latest/:username', laundryTableController.getLatestLaundryTableEntries)

// GET route to get total consumption of every user
router.get('/total', laundryTableController.getTotalEnergyAllUsers)

// POST request to turn off kitchen
router.post('/:username/on', laundryTableController.turnOnLaundry)

// POST request to turn off kitchen
router.post('/:username/off', laundryTableController.turnOffLaundry)

module.exports = router;
