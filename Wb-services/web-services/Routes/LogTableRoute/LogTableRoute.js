const express = require('express');
const router = express.Router();
const logTableController = require('../../Controllers/LogTableController')

// GET route to fetch all log table entries
// router.get('/', logTableController.getLogTable);

// GET route to get latest 3 enteries
router.get('/latest/:username', logTableController.getLatestLogTableEntries)

// GET route to get total consumption of every user
router.get('/total', logTableController.getTotalEnergyAllUsers)

// POST route to create a new log table entry
// router.post('/', logTableController.createLogTable);

// PUT route to update an existing log table entry
// router.put('/:id', logTableController.updateLogTable);

module.exports = router;
