const Place = require('../models/Place')

module.exports = {
    addPlaces: async (req, res, next) => {
        const {country_id, description, imageUrl, location,  title, rating, review, latitude, longitude } = require.body;

        try {   
            const newPlace = new Place({
                country_id, 
                description, 
                imageUrl, 
                location,  
                title, 
                rating, 
                review, 
                latitude, 
                longitude
            })

            await newPlace.save();

            res.status(201).json({status: true})
        } catch(error) {
            return next(error)
        }
    },

    getPlaces: async (req, res, next)=> {
        try {
            const places = await places.find({}, '_id review rating imageUrl title country_id')

            res.status(200).json({ places })

        } catch (error) {
            return next(error)
        }
    },
    getPlace: async (req, res, next)=> {
        const placeId = req.param.id;
        try {
            const place = await place.findById(placeId, {country: 1, _id: 1, imageUrl: 1})

            res.status(200).json({ place })

        } catch (error) {
            return next(error)
        }
    },
}