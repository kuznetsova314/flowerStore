const uuid = require('uuid')
const path = require('path');
const ApiError = require('../error/ApiError');

let Orders = [
    {
        delivery: "delivery", 
        period: {time: "12:50", date: "2023-05-25", secrecy: false}, 
        products: [{id: 5, name: "Букет из разноцветных ромашек роз пионов и лилий", size: "Малый", count: 2}, {id: 6, name: "Букет из разноцветных ромашек роз пионов и лилий", size: "Малый", count: 4}], 
        recipient: {who: "myself", fullName: "Валерий Меладзе", tel: "+7123456789", city: "Владивосток", address: "Владивосток", note: ""}, 
        contacts: {fullName: "Валерий Меладзе", tel: "+7123456789", city: "Владивосток"}, 
        payment: "cashShop", 
        userId: 5, 
        orderSum: 896,
        date: 1684921929078, 
        number: 130326, 
        status: "delivered"
    },
    {
        delivery: "delivery", 
        period: {time: "12:50", date: "2023-05-25", secrecy: false}, 
        products: [{id: 5, name: "Букет из разноцветных ромашек роз пионов и лилий", size: "Малый", count: 2}, {id: 6, name: "Букет из разноцветных ромашек роз пионов и лилий", size: "Малый", count: 4}], 
        recipient: {who: "myself", fullName: "Валерий Меладзе", tel: "+7123456789", city: "Владивосток", address: "Владивосток", note: ""}, 
        contacts: {fullName: "Валерий Меладзе", tel: "+7123456789", city: "Владивосток"}, 
        payment: "cashShop", 
        userId: 5, 
        orderSum: 896,
        date: 1684921929037, 
        number: 130327, 
        status: "handling"
    },
    {
        delivery: "delivery", 
        period: {time: "12:50", date: "2023-05-25", secrecy: false}, 
        products: [{id: 5, name: "Букет из разноцветных ромашек роз пионов и лилий", size: "Малый", count: 2}, {id: 6, name: "Букет из разноцветных ромашек роз пионов и лилий", size: "Малый", count: 4}], 
        recipient: {who: "myself", fullName: "Валерий Меладзе", tel: "+7123456789", city: "Владивосток", address: "Владивосток", note: ""}, 
        contacts: {fullName: "Валерий Меладзе", tel: "+7123456789", city: "Владивосток"}, 
        payment: "cashShop", 
        userId: 5, 
        orderSum: 896,
        date: 1684921929077, 
        number: 130328, 
        status: "paid"
    },
    {
        delivery: "delivery", 
        period: {time: "12:50", date: "2023-05-25", secrecy: false}, 
        products: [{id: 5, name: "Букет из разноцветных ромашек роз пионов и лилий", size: "Малый", count: 2}, {id: 6, name: "Букет из разноцветных ромашек роз пионов и лилий", size: "Малый", count: 4}], 
        recipient: {who: "myself", fullName: "Валерий Меладзе", tel: "+7123456789", city: "Владивосток", address: "Владивосток", note: ""}, 
        contacts: {fullName: "Валерий Меладзе", tel: "+7123456789", city: "Владивосток"}, 
        payment: "cashShop", 
        userId: 1, 
        orderSum: 896,
        date: 1684921929077, 
        number: 130329, 
        status: "delivered"
    },
    {
        delivery: "delivery", 
        period: {time: "12:50", date: "2023-05-25", secrecy: false}, 
        products: [{id: 5, name: "Букет из разноцветных ромашек роз пионов и лилий", size: "Малый", count: 2}, {id: 6, name: "Букет из разноцветных ромашек роз пионов и лилий", size: "Малый", count: 4}], 
        recipient: {who: "myself", fullName: "Валерий Меладзе", tel: "+7123456789", city: "Владивосток", address: "Владивосток", note: ""}, 
        contacts: {fullName: "Валерий Меладзе", tel: "+7123456789", city: "Владивосток"}, 
        payment: "cashShop", 
        userId: 1, 
        orderSum: 896,
        date: 1684921929077, 
        number: 130330, 
        status: "delivered"
    },
    {
        delivery: "delivery", 
        period: {time: "12:50", date: "2023-05-25", secrecy: false}, 
        products: [{id: 5, name: "Букет из разноцветных ромашек роз пионов и лилий", size: "Малый", count: 2}, {id: 6, name: "Букет из разноцветных ромашек роз пионов и лилий", size: "Малый", count: 4}], 
        recipient: {who: "myself", fullName: "Валерий Меладзе", tel: "+7123456789", city: "Владивосток", address: "Владивосток", note: ""}, 
        contacts: {fullName: "Валерий Меладзе", tel: "+7123456789", city: "Владивосток"}, 
        payment: "cashShop", 
        userId: 2, 
        orderSum: 896,
        date: 1684921929077, 
        number: 130331, 
        status: "delivered"
    },
    {
        delivery: "delivery", 
        period: {time: "12:50", date: "2023-05-25", secrecy: false}, 
        products: [{id: 5, name: "Букет из разноцветных ромашек роз пионов и лилий", size: "Малый", count: 2}, {id: 6, name: "Букет из разноцветных ромашек роз пионов и лилий", size: "Малый", count: 4}], 
        recipient: {who: "myself", fullName: "Валерий Меладзе", tel: "+7123456789", city: "Владивосток", address: "Владивосток", note: ""}, 
        contacts: {fullName: "Валерий Меладзе", tel: "+7123456789", city: "Владивосток"}, 
        payment: "cashShop", 
        userId: 3, 
        orderSum: 896,
        date: 1684921929077, 
        number: 130332, 
        status: "delivered"
    },
]

class OrdersController {
    create(req, res, next) {
        try {
            let {userId, products, orderSum, delivery, period, recipient, contacts, payment} = req.body
            let recipientForOrder; 
            if(recipient) {
                recipientForOrder = JSON.parse(recipient);
            } else {
                recipientForOrder = "myself"
            }
            const number = +Orders.at(-1).number + 1;
            const status = "delivered";
            const date = Date.now();
            const periodForOrder = JSON.parse(period);
            const productsForOrder = JSON.parse(products);
            
            const contactsForOrder = JSON.parse(contacts); 
            Orders.push({
                delivery: delivery,
                period: periodForOrder,
                products: productsForOrder,
                recipient: recipientForOrder,
                contacts: contactsForOrder,
                payment: payment,
                userId: Number(userId), 
                orderSum: Number(orderSum), 
                date: date, 
                number: number, 
                status: status
            });
            return res.json("Заказ отпаравлен");
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    getAll(req, res) {
        let {userId} = req.query
        let orders = Orders.filter(item => item.userId === +userId);
        return res.json(orders)
    }


}

module.exports = new OrdersController()
