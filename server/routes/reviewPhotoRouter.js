const Router = require('express')
const router = new Router()
const reviewsPhotoController = require('../controllers/reviewPhotoController')

router.post('/', reviewsPhotoController.create)
router.get('/', reviewsPhotoController.getAll)
router.get('/:id', reviewsPhotoController.getOne)

module.exports = router
