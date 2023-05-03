const Router = require('express')
const router = new Router()
const reviewsTextController = require('../controllers/reviewTextController')

router.post('/', reviewsTextController.create)
router.get('/', reviewsTextController.getAll)
router.get('/:id', reviewsTextController.getOne)

module.exports = router
