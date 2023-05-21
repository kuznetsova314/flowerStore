const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.post('/', basketController.create)
router.get('/', basketController.getAll)
router.put('/', basketController.changeItem)
router.delete('/', basketController.deleteItem)

module.exports = router
