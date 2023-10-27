const router = require('express').Router();
const hotelController = require('../controllers/hotelController');
const {verifyToken} = require('../middleware/jwt_token')

router.post('/', verifyToken, hotelController.addHotel)
router.get('/:id', hotelController.getHotelsById)
router.get('/ByCountry/:id', hotelController.getHotelsByCountry)

module.exports = router;
