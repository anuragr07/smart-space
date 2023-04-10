const mongoose = require('mongoose');

const laundryTableSchema = new mongoose.Schema({
  username: { type: String, required: true },
  status: { type: String, enum: ['On', 'Off'], default: 'Off' },
  total_energy: { type: Number, default: 0 },
}, {collection: "LaundryTable"});

const LaundryTable = mongoose.model('LaundryTable', laundryTableSchema);

module.exports = LaundryTable;