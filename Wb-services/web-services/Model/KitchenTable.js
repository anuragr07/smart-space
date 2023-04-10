const mongoose = require('mongoose');

const kitchenTableSchema = new mongoose.Schema({
  username: { type: String, required: true },
  status: { type: String, enum: ['On', 'Off'], default: 'Off' },
  total_energy: { type: Number, default: 0 },
}, {collection: "KitchenTable"});

const KitchenTable = mongoose.model('KitchenTable', kitchenTableSchema);

module.exports = KitchenTable;