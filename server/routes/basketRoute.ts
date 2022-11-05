export {};
const Router = require('express')
const router = new Router()

const basketController = require('../controllers/basketController')

router.get('/', basketController.getBaskets)
router.post('/', basketController.addToBasket)
router.post('/delete', basketController.deleteBasket)
router.post('/deleteAll', basketController.deleteBasketAll)

module.exports = router
