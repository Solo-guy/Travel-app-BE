const router = require('express').Router();
const PlaceController = require('../controllers/PlaceController');
const {verifyToken} = require('../middleware/jwt_token')

router.post('/', verifyToken, PlaceController.addPlaces)
router.get('/', PlaceController.getPlaces)
router.get('/:id', PlaceController.getPlace)
router.get('/ByCountry/:id', PlaceController.getPlacesByCountry)
router.get('/search/:key', PlaceController.search)

module.exports = router;
