const uuid = require('uuid')
const path = require('path');
const ApiError = require('../error/ApiError');

let Orders = [
    {userId: 3, date: 1676847888, number: 130325, products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}, {id: 2, name: "Букет из разноцветных роз", size: "малый", count: 1, price: 2000}], orderSum: 44000, status: "delivered"},
    {userId: 3, date: 1676847878, number: 130325, products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}], orderSum: 2000, status: "handling"},
    {userId: 3, date: 1676847856, number: 130325, products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}, {id: 2, name: "Букет из разноцветных роз", size: "малый", count: 1, price: 2000}], orderSum: 4000, status: "paid"},
    {userId: 4, date: 1676847856, number: 130325, products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}, {id: 2, name: "Букет из разноцветных роз", size: "малый", count: 1, price: 2000}], orderSum: 4000, status: "paid"},
    {userId: 5, date: 1676847856, number: 130325, products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}, {id: 2, name: "Букет из разноцветных роз", size: "малый", count: 1, price: 2000}], orderSum: 4000, status: "paid"},
    {userId: 4, date: 1676847856, number: 130325, products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}, {id: 2, name: "Букет из разноцветных роз", size: "малый", count: 1, price: 2000}], orderSum: 4000, status: "paid"},
    {userId: 5, date: 1676847856, number: 130325, products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}, {id: 2, name: "Букет из разноцветных роз", size: "малый", count: 1, price: 2000}], orderSum: 4000, status: "paid"},
    {userId: 6, date: 1676847856, number: 130325, products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}, {id: 2, name: "Букет из разноцветных роз", size: "малый", count: 1, price: 2000}], orderSum: 4000, status: "paid"},
    {userId: 6, date: 1676847856, number: 130325, products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}, {id: 2, name: "Букет из разноцветных роз", size: "малый", count: 1, price: 2000}], orderSum: 4000, status: "paid"},
]

class OrdersController {
    create(req, res, next) {
        try {
            let {userId, products, orderSum} = req.body
            const number = +Orders.at(-1).number + 1
            const status = "delivered"
            const date = Date.now()
            Orders.push({userId: userId, products: products, orderSum: orderSum, date: date, number: number, status: status});
            return res.json(Orders)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let start = page * limit - limit
        let end = start + limit
        let orders = Orders.slice(start, end);
        return res.json(orders)
    }


}

module.exports = new OrdersController()
