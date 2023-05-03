const uuid = require('uuid')
const path = require('path');
const ApiError = require('../error/ApiError');

let Products = [
    {id: 201, name: "Шок. конфеты 'Лучшей маме'", price: 23000, img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847878, rating: 1},
    {id: 202, name: "Шок. конфеты 'Лучшей маме'", price: 6000, tag: 'Новинка', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847870, rating: 2},
    {id: 203, name: "Шок. конфеты 'Лучшей маме'", price: 2300, tag: 'Новинка', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847860, rating: 3},
    {id: 204, name: "Шок. конфеты 'Лучшей маме'", price: 230, img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847850, rating: 4},
    {id: 205, name: "Шок. конфеты 'Лучшей маме'", price: 4000, tag: 'Акция', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847834, rating: 5},
    {id: 206, name: "Шок. конфеты 'Лучшей маме'", price: 2300, tag: 'Новинка', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847860, rating: 3},
    {id: 207, name: "Шок. конфеты 'Лучшей маме'", price: 230, img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847850, rating: 4},
    {id: 208, name: "Шок. конфеты 'Лучшей маме'", price: 4000, tag: 'Акция', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847834, rating: 5},
]

class ProductController {
    async create(req, res, next) {
        try {
            let {name, price, rating, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const id = +Products.length
            const date = Date.now()
            Products.push({id: id, name: name, price: price, date: date, rating: rating, img: fileName, tag: "Акция"});
            return res.json(Products)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        let start = page * limit - limit
        let end = start + limit
        let products = Products.slice(start, end);
        return res.json(products)
    }

    getOne(req, res) {
        const {id} = req.params
        const product = Products.find(p => p.id === +id)
        return res.json(product)
    }
}

module.exports = new ProductController()
