const uuid = require('uuid')
const path = require('path');
const ApiError = require('../error/ApiError');

let Bouquet = [
    {id: 1, name: "Букет из разноцветных ромашек роз пионов и лилий", price: [{name: "Малый", value: 1290}, {name: "Средний", value: 1550}, {name: "Большой", value: 1800}], flowers: ["roses", "tulips"], pack: 'p_box', color: 'c_white', img: [{id: 1, src: `../static/1.jpg`}, {id: 2, src: `../static/1.jpg`},{id: 3, src: `../static/1.jpg`},{id: 4, src: `../static/1.jpg`}], date: 1676847878, rating: 1},
    {id: 2, name: "Букет из разноцветных роз", price: [{name: "Малый", value: 129}, {name: "Средний", value: 155}, {name: "Большой", value: 180}], flowers: ["roses", "tulips"], pack: 'p_bouquet', color: 'c_red', tag: 'Новинка', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847870, rating: 2},
    {id: 3, name: "Букет из разноцветных пионов", price: [{name: "Малый", value: 2500}, {name: "Средний", value: 3500}, {name: "Большой", value: 1900}], flowers: [ "roses", "tulips"], pack: 'p_bouquet', color: 'c_blue', tag: 'Новинка', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847860, rating: 3},
    {id: 4, name: "Букет из разноцветных роз", price: [{name: "Малый", value: 4600}, {name: "Средний", value: 1540}, {name: "Большой", value: 1799}], flowers: ["roses", "tulips"], pack: 'p_basket', color: 'c_red', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847850, rating: 4},
    {id: 5, name: "Букет из разноцветных роз", price: [{name: "Малый", value: 2700}, {name: "Средний", value: 1550}, {name: "Большой", value: 1900}], flowers: [ "roses"], pack: 'p_basket', color: 'c_yellow', tag: 'Акция', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847834, rating: 5},
    {id: 6, name: "Букет из разноцветных пионов", price: [{name: "Малый", value: 990}, {name: "Средний", value: 1540}, {name: "Большой", value: 1800}], flowers: [ "roses", "tulips"], pack: 'p_bouquet', color: 'c_blue', tag: 'Новинка', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847860, rating: 3},
    {id: 7, name: "Букет из разноцветных роз", price: [{name: "Малый", value: 6000}, {name: "Средний", value: 1550}, {name: "Большой", value: 1800}], flowers: ["roses", "tulips"], pack: 'p_basket', color: 'c_red', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847850, rating: 4},
    {id: 8, name: "Букет из разноцветных роз", price: [{name: "Малый", value: 7000}, {name: "Средний", value: 1550}, {name: "Большой", value: 1800}], flowers: [ "roses"], pack: 'p_basket', color: 'c_yellow', tag: 'Акция', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847834, rating: 5},
    {id: 9, name: "Букет из разноцветных пионов",price: [{name: "Малый", value: 2300}, {name: "Средний", value: 1550}, {name: "Большой", value: 1800}], flowers: [ "roses", "tulips"], pack: 'p_bouquet', color: 'c_blue', tag: 'Новинка', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847860, rating: 3},
    {id: 10, name: "Букет из разноцветных роз", price: [{name: "Малый", value: 4500}, {name: "Средний", value: 1550}, {name: "Большой", value: 1800}], flowers: ["roses", "tulips"], pack: 'p_basket', color: 'c_red', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847850, rating: 4},
    {id: 11, name: "Букет из разноцветных роз", price: [{name: "Малый", value: 1254}, {name: "Средний", value: 1550}, {name: "Большой", value: 1800}], flowers: [ "roses"], pack: 'p_basket', color: 'c_yellow', tag: 'Акция', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847834, rating: 5},
]

class BouquetController {
    create(req, res, next) {
        try {
            let {name, price, flowers, pack, color, rating, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const id = +Bouquet.length
            const date = Date.now()
            Bouquet.push({id: id, name: name, price: price, flowers: flowers, pack: pack, color: color, date: date, rating: rating, img: fileName});
            return res.json(Bouquet)
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
        let bouquets = Bouquet.slice(start, end);
        return res.json(bouquets)
    }

    getOne(req, res) {
        const {id} = req.params
        const bouquet = Bouquet.find(b => b.id === +id)
        return res.json(bouquet)
    }
}

module.exports = new BouquetController()
