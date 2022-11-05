export {};
const Router = require('express')
const router = new Router()
const typeRouter = require('./typeRoute')
const itemRouter = require('./itemRoute')
const basketRouter = require('./basketRoute')

router.use('/type', typeRouter)
router.use('/item', itemRouter)
router.use('/basket', basketRouter)

module.exports = router
