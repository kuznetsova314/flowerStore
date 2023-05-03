const uuid = require('uuid')
const path = require('path');

const ApiError = require('../error/ApiError');

let Basket = [
    {
    product: {id: 1, name: "Букет из разноцветных ромашек роз пионов и лилий", price: [{size: "Малый", value: 1290}, {size: "Средний", value: 1550}, {size: "Большой", value: 1800}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_box', color: 'c_white', img: [{id: 1, src: "http://localhost:5000/api/static/1.jpg"}, {id: 2, src: "../static/1.jpg"},{id: 3, src: "../static/1.jpg"},{id: 4, src: "../static/1.jpg"}], date: 1676847878, rating: 1},
        price: {size: "Малый", value: 1290},
        userId: 6,
        count: 1
    },
    {
        product: {id: 2, name: "Букет из разноцветных ромашек роз пионов и лилий", price: [{size: "Малый", value: 1290}, {size: "Средний", value: 1550}, {size: "Большой", value: 1800}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_box', color: 'c_white', img: [{id: 1, src: "../static/1.jpg"}, {id: 2, src: "../static/1.jpg"},{id: 3, src: "../static/1.jpg"},{id: 4, src: "../static/1.jpg"}], date: 1676847878, rating: 1},
        price: {size: "Малый", value: 190},
        userId: 3,
        count: 2
    },
    {
        product: {id: 3, name: "Букет из разноцветных ромашек роз пионов и лилий", price: [{size: "Малый", value: 1290}, {size: "Средний", value: 1550}, {size: "Большой", value: 1800}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_box', color: 'c_white', img: [{id: 1, src: "../static/1.jpg"}, {id: 2, src: "../static/1.jpg"},{id: 3, src: "../static/1.jpg"},{id: 4, src: "../static/1.jpg"}], date: 1676847878, rating: 1},
        price: {size: "Малый", value: 129},
        userId: 3,
        count: 3
    },
    {
        product: {id: 1, name: "Букет из разноцветных ромашек роз пионов и лилий", price: [{size: "Малый", value: 1290}, {size: "Средний", value: 1550}, {size: "Большой", value: 1800}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_box', color: 'c_white', img: [{id: 1, src: "../static/1.jpg"}, {id: 2, src: "../static/1.jpg"},{id: 3, src: "../static/1.jpg"},{id: 4, src: "../static/1.jpg"}], date: 1676847878, rating: 1},
        price: {size: "Малый", value: 1290},
        userId: 4,
        count: 1
    },
    {
        product: {id: 2, name: "Букет из разноцветных ромашек роз пионов и лилий", price: [{size: "Малый", value: 1290}, {size: "Средний", value: 1550}, {size: "Большой", value: 1800}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_box', color: 'c_white', img: [{id: 1, src: "../static/1.jpg"}, {id: 2, src: "../static/1.jpg"},{id: 3, src: "../static/1.jpg"},{id: 4, src: "../static/1.jpg"}], date: 1676847878, rating: 1},
        price: {size: "Малый", value: 190},
        userId: 5,
        count: 2
    },
    {
        product: {id: 3, name: "Букет из разноцветных ромашек роз пионов и лилий", price: [{size: "Малый", value: 1290}, {size: "Средний", value: 1550}, {size: "Большой", value: 1800}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_box', color: 'c_white', img: [{id: 1, src: "../static/1.jpg"}, {id: 2, src: "../static/1.jpg"},{id: 3, src: "../static/1.jpg"},{id: 4, src: "../static/1.jpg"}], date: 1676847878, rating: 1},
        price: {size: "Малый", value: 129},
        userId: 5,
        count: 3
    },
]

class BasketController {

    create(req, res, next) {
        try {
            let { userId, price, product, count} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            Basket.push({userId: userId, product: product, price: price, count: count, img: fileName});
            return res.json(Basket)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    getAll(req, res) {
        const {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let start = page * limit - limit
        let end = start + limit
        const products = Basket.slice(start, end);
        return res.json(products)

    }

    getOne(req, res) {
        const {id} = req.params
        const product = Basket.find(b => b.userId === +id)
        return res.json(product)
    }
}

module.exports = new BasketController()
