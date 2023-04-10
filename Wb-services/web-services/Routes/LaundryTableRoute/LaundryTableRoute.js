const express = require('express');
const router = express.Router();
const laundryTableController = require('../../Controllers/LaundryTableController')

// GET route to fetch all log table entries
// router.get('/', laundryTableController.getLaundryTable);

// GET route to get latest 3 enteries
router.get('/latest/:username', laundryTableController.getLatestLaundryTableEntries)

// GET route to get total consumption of every user
router.get('/total', laundryTableController.getTotalEnergyAllUsers)

// POST route to create a new log table entry
// router.post('/', laundryTableController.createLaundryTable);

// PUT route to update an existing log table entry
// router.put('/:id', laundryTableController.updateLaundryTable);

module.exports = router;
