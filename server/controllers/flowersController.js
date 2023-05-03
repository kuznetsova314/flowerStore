const uuid = require('uuid')
const path = require('path');
const ApiError = require('../error/ApiError');

let Flowers = [
    {id: 1, name: "Розами", value: "roses"},
    {id: 2, name: "Тюльпанами", value: "tulips"},
    {id: 3, name: "Гортензиями", value: "hydrangea"},
    {id: 4, name: "Орхидеями", value: "orchid"},
    {id: 5, name: "Ирисами", value: "iris"},
    {id: 6, name: "Лилиями", value: "lily"},
    {id: 7, name: "Герберами", value: "gerbera"},
    {id: 8, name: "Пионами", value: "peonies"},
    {id: 9, name: "Ромашками", value: "chamomile"},
    {id: 10, name: "Васильками", value: "cornflower"},
    {id: 11, name: "Незабудками", value: "forget_me_not"},
    {id: 12, name: "Харизантемами", value: "chrysanthemum"},
]
class FlowersController {
    create(req, res, next) {
        try {
            let {name, value} = req.body
            const id = +Flowers.length
            Flowers.push({id: id, name: name, value: value});
            return res.json(Flowers)
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
        let flowers = Flowers.slice(start, end);
        return res.json(flowers)
    }

}

module.exports = new FlowersController()
