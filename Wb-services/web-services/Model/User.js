var mongoose = require('mongoose')
var UserSchema = new mongoose.Schema({
    user_id: Number,
    first_name: String,
    last_name: String,
    username: String,
    email: String,
    password: String
}, {collection: "Users"})
mongoose.model('User', UserSchema)

module.exports = mongoose.model('User')
