const uuid = require('uuid')
const path = require('path');

const ApiError = require('../error/ApiError');

let Basket = [
    {
        product: {id: 1, name: "Букет из разноцветных ромашек роз пионов и лилий", price: [{size: "Малый", value: 1290}, {size: "Средний", value: 1550}, {size: "Большой", value: 1800}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_box', color: 'c_white', img: [{id: 1, src: "http://localhost:5000/api/static/1.jpg"}, {id: 2, src: "../static/1.jpg"},{id: 3, src: "../static/1.jpg"},{id: 4, src: "../static/1.jpg"}], date: 1676847878, rating: 1},
        price: {size: "Малый", value: 1290},
        userId: 6,
        count: 1,
        id: 1
    },
    {
        product: {id: 2, name: "Букет из разноцветных ромашек роз пионов и лилий", price: [{size: "Малый", value: 1290}, {size: "Средний", value: 1550}, {size: "Большой", value: 1800}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_box', color: 'c_white', img: [{id: 1, src: "../static/1.jpg"}, {id: 2, src: "../static/1.jpg"},{id: 3, src: "../static/1.jpg"},{id: 4, src: "../static/1.jpg"}], date: 1676847878, rating: 1},
        price: {size: "Малый", value: 190},
        userId: 3,
        count: 2,
        id: 2
    },
    {
        product: {id: 3, name: "Букет из разноцветных ромашек роз пионов и лилий", price: [{size: "Малый", value: 1290}, {size: "Средний", value: 1550}, {size: "Большой", value: 1800}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_box', color: 'c_white', img: [{id: 1, src: "../static/1.jpg"}, {id: 2, src: "../static/1.jpg"},{id: 3, src: "../static/1.jpg"},{id: 4, src: "../static/1.jpg"}], date: 1676847878, rating: 1},
        price: {size: "Малый", value: 129},
        userId: 3,
        count: 3,
        id: 3
    },
    {
        product: {id: 5, name: "Букет из разноцветных ромашек роз пионов и лилий", price: [{size: "Малый", value: 1290}, {size: "Средний", value: 1550}, {size: "Большой", value: 1800}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_box', color: 'c_white', img: [{id: 1, src: "../static/1.jpg"}, {id: 2, src: "../static/1.jpg"},{id: 3, src: "../static/1.jpg"},{id: 4, src: "../static/1.jpg"}], date: 1676847878, rating: 1},
        price: {size: "Малый", value: 1290},
        userId: 4,
        count: 1,
        id: 4
    },
    {
        product: {id: 5, name: "Букет из разноцветных ромашек роз пионов и лилий", price: [{size: "Малый", value: 1290}, {size: "Средний", value: 1550}, {size: "Большой", value: 1800}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_box', color: 'c_white', img: [{id: 1, src: "../static/1.jpg"}, {id: 2, src: "../static/1.jpg"},{id: 3, src: "../static/1.jpg"},{id: 4, src: "../static/1.jpg"}], date: 1676847878, rating: 1},
        price: {size: "Малый", value: 190},
        userId: 5,
        count: 2,
        id: 5
    },
    {
        product: {id: 5, name: "Букет из разноцветных ромашек роз пионов и лилий", price: [{size: "Малый", value: 1290}, {size: "Средний", value: 1550}, {size: "Большой", value: 1800}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_box', color: 'c_white', img: [{id: 1, src: "../static/1.jpg"}, {id: 2, src: "../static/1.jpg"},{id: 3, src: "../static/1.jpg"},{id: 4, src: "../static/1.jpg"}], date: 1676847878, rating: 1},
        price: {size: "Малый", value: 129},
        userId: 5,
        count: 3,
        id: 6
    },
]

class BasketController {

    create(req, res, next) {
        try {
            let { userId, price, product, count} = req.body
            const id = +Basket.length + 1;
            const productForBasket = JSON.parse(product);
            const priceForBasket = JSON.parse(price);
            const countForBasket = JSON.parse(count);
            const userIdForBasket = JSON.parse(userId);
            Basket.push({userId: userIdForBasket, product: productForBasket, price: priceForBasket, count: countForBasket, id: id});
            return res.json("Добавлено успешно")
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    getAll(req, res) {
        const {userId} = req.query
        const products = Basket.filter(item => item.userId == userId);
        return res.json(products)

    }
    changeItem(req, res) {
        const product = req.body
        Basket.forEach(item => {
            if(item.id === product.id) {item.count = product.count}
        });
        let elem = Basket.find(item => item.id === product.id)
        return res.json(elem);
    }
    deleteItem(req, res) {
        const {basketId, userId} = req.query
        const elem = Basket.find(item => item.id === basketId)
        const index = Basket.indexOf(elem)
        Basket.splice(index, 1);
        const products = Basket.filter(item => item.userId == userId);
        return res.json(products);
    }
}

module.exports = new BasketController()
