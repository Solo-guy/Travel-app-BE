const router = require('express').Router();
const CountryControllers = require('../controllers/CountryControllers');
const {verifyToken} = require('../middleware/jwt_token')

router.post('/', verifyToken, CountryControllers.addCountry)
router.get('/', CountryControllers.getCountries)
router.get('/:id', CountryControllers.getCountry)
router.post('/places', CountryControllers.addPlacesToCountry)

module.exports = router;
