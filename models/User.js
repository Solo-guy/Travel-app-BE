const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {type: String, require: true},
    email: {type: String, require: true, unique: true },
    password: {type: String, require: true},
    profile: {type: String, default: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="},
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);