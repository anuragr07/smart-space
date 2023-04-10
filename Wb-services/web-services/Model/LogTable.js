const mongoose = require('mongoose');

const logTableSchema = new mongoose.Schema({
  username: { type: String, required: true },
  status: { type: String, enum: ['On', 'Off'], default: 'Off' },
  total_energy: { type: Number, default: 0 },
}, {collection: "LogTable"});

const LogTable = mongoose.model('LogTable', logTableSchema);

module.exports = LogTable;