const mongoose = require('mongoose')

const PlaceSchema = new mongoose.Schema({
    country_id: {type: String, require: true},
    description: {type: String, require: true},
    imageUrl: {type: String, require: true},
    location: {type: String, require: true}, 
    title: {type: String, require: true}, 
    rating: {type: Number, require: true}, 
    review: {type: String, require: true}, 
    latitude: {type: Number, require: true}, 
    longitude: {type: Number, require: true}, 

    // popular: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Place"
    //     }
    // ]
}, {timestamps: true});

module.exports = mongoose.model("Place", PlaceSchema);