const Router = require('express')
const router = new Router()
const bouquetController = require('../controllers/bouquetController')

router.post('/', bouquetController.create)
router.get('/', bouquetController.getAll)
router.get('/:id', bouquetController.getOne)

module.exports = router
