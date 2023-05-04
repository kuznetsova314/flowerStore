const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (id, phone, role) => {
    return jwt.sign(
        {id, phone, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

let User = [
    {id: 1, fullName: "Валерий Меладзе", phone: "+71234567890", password: "1234", role: "admin", city: "Москва", address: "Москва", promotion: 5},
    {id: 2, fullName: "Борис Борисович", phone: "+71234567891", password: "1234", role: "worker", city: "Новгород", address: "Москва", promotion: 10},
    {id: 3, fullName: "Александр Александрович", phone: "+71234567892", password: "1234", role: "user", city: "Москва", address: "Новгород", promotion: 5},
    {id: 4, fullName: "Валерий Меладзе", phone: "+71234567893", password: "1234", role: "user", city: "Красноярск", address: "Москва", promotion: 5},
    {id: 5, fullName: "Валерий Меладзе", phone: "+71234567894", password: "1234", role: "user", city: "Москва", address: "Москва", promotion: 5},
]
class UserController {
    registration(req, res, next) {
        const {phone, password, fullName, city, address} = req.body
        if (!phone || !password) {
            return next(ApiError.badRequest('Некорректный номер телефона или пароль'))
        }
        const candidate = User.find(u => u.phone === phone)
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с этим номером телефона уже существует'))
        }
        const id = User.length + 1;
        const user = {id: id, phone: phone, role: "user", password: password, fullName: fullName, city: city, address: address}
        User.push({user})
        const token = generateJwt(user.id, user.phone, user.role)
        return res.json({token, fullName: user.fullName, city: user.city, address: user.address, promotion: user.promotion})
    }

    login(req, res, next) {
        const {phone, password} = req.body
        const user = User.find(u => u.phone === phone)
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = user.password === password ? true : false;
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.phone, user.role)
        return res.json({token, fullName: user.fullName, city: user.city, address: user.address, promotion: user.promotion})
    }

    check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.phone, req.user.role)
        const user = User.find(u => u.phone === req.user.phone)
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        return res.json({token, fullName: user.fullName, city: user.city, address: user.address, promotion: user.promotion})
    }
}

module.exports = new UserController()
