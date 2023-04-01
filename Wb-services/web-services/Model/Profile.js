const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user_id: { type: Number, required: true },
  room: [{
    room_id: { type: Number, required: true },
    room_name: { type: String, required: true },
    device: [{
      device_id: { type: Number, required: true },
      device_name: { type: String, required: true },
      status: { type: String, required: true },
      ip: { type: String, required: true },
      settings: [{
        On: { type: String, required: true },
        Brightness: { type: Number, required: true },
        Hue: { type: Number, required: true },
        Saturation: { type: Number, required: true },
        "XY color": [{ type: Number, required: true }],
        Alert: { type: String, required: true },
        Effect: { type: String, required: true },
        Reachable: { type: String, required: true },
        "Color mode": { type: String, required: true },
        Name: { type: String, required: true },
        Type: { type: String, required: true }
      }]
    }]
  }]
}, {collection: "Rooms"});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;