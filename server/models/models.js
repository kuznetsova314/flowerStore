
 const User =  [

    {id: 1, fullName: "Валерий Меладзе", phone: "+71234567890", password: 1234, role: "admin", city: "Москва", address: "Москва", promotion: 5},
    {id: 2, fullName: "Борис Борисович", phone: "+71234567891", password: 1234, role: "worker", city: "Новгород", address: "Москва", promotion: 10},
    {id: 3, fullName: "Александр Александрович", phone: "+71234567892", password: 1234, role: "user", city: "Москва", address: "Новгород", promotion: 5},
    {id: 4, fullName: "Валерий Меладзе", phone: "+71234567893", password: 1234, role: "user", city: "Красноярск", address: "Москва", promotion: 5},
    {id: 5, fullName: "Валерий Меладзе", phone: "+71234567894", password: 1234, role: "user", city: "Москва", address: "Москва", promotion: 5},

    
]
module.exports = User;
const Orders = [
    {userId: 3, date: 1676847888, number: "1N30325", products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}, {id: 2, name: "Букет из разноцветных роз", size: "малый", count: 1, price: 2000}], orderSum: 44000, status: "delivered"},
    {userId: 3, date: 1676847878, number: "1N30325", products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}], orderSum: 2000, status: "handling"},
    {userId: 3, date: 1676847856, number: "1N30325", products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}, {id: 2, name: "Букет из разноцветных роз", size: "малый", count: 1, price: 2000}], orderSum: 4000, status: "paid"},
    {userId: 4, date: 1676847856, number: "1N30325", products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}, {id: 2, name: "Букет из разноцветных роз", size: "малый", count: 1, price: 2000}], orderSum: 4000, status: "paid"},
    {userId: 5, date: 1676847856, number: "1N30325", products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}, {id: 2, name: "Букет из разноцветных роз", size: "малый", count: 1, price: 2000}], orderSum: 4000, status: "paid"},
    {userId: 4, date: 1676847856, number: "1N30325", products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}, {id: 2, name: "Букет из разноцветных роз", size: "малый", count: 1, price: 2000}], orderSum: 4000, status: "paid"},
    {userId: 5, date: 1676847856, number: "1N30325", products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}, {id: 2, name: "Букет из разноцветных роз", size: "малый", count: 1, price: 2000}], orderSum: 4000, status: "paid"},
    {userId: 6, date: 1676847856, number: "1N30325", products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}, {id: 2, name: "Букет из разноцветных роз", size: "малый", count: 1, price: 2000}], orderSum: 4000, status: "paid"},
    {userId: 6, date: 1676847856, number: "1N30325", products: [{id: 1, name: "Букет из разноцветных роз", size: "малый", count: 2, price: 1000}, {id: 2, name: "Букет из разноцветных роз", size: "малый", count: 1, price: 2000}], orderSum: 4000, status: "paid"},
]
module.exports = Orders;


class Basket {
  constructor() {
    this.__reviews = 
  [
    {
        product: {id: 1, name: "Букет из разноцветных ромашек роз пионов и лилий", price: [{size: "Малый", value: 1290}, {size: "Средний", value: 1550}, {size: "Большой", value: 1800}], size: 'small', flowers: ["roses", "tulips"], pack: 'p_box', color: 'c_white', img: [{id: 1, src: "../static/1.jpg"}, {id: 2, src: "../static/1.jpg"},{id: 3, src: "../static/1.jpg"},{id: 4, src: "../static/1.jpg"}], date: 1676847878, rating: 1},
        price: {size: "Малый", value: 1290},
        userId: 4,
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
  }
  get reviews(){
    return this.__reviews
  }
  }
module.exports = new Basket();

const Product = {
    
    products: [
        {id: 201, name: "Шок. конфеты 'Лучшей маме'", price: 23000, img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847878, rating: 1},
        {id: 202, name: "Шок. конфеты 'Лучшей маме'", price: 6000, tag: 'Новинка', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847870, rating: 2},
        {id: 203, name: "Шок. конфеты 'Лучшей маме'", price: 2300, tag: 'Новинка', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847860, rating: 3},
        {id: 204, name: "Шок. конфеты 'Лучшей маме'", price: 230, img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847850, rating: 4},
        {id: 205, name: "Шок. конфеты 'Лучшей маме'", price: 4000, tag: 'Акция', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847834, rating: 5},
        {id: 206, name: "Шок. конфеты 'Лучшей маме'", price: 2300, tag: 'Новинка', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847860, rating: 3},
        {id: 207, name: "Шок. конфеты 'Лучшей маме'", price: 230, img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847850, rating: 4},
        {id: 208, name: "Шок. конфеты 'Лучшей маме'", price: 4000, tag: 'Акция', img: [{id: 1, src: `https://via.placeholder.com/150/92c952`}, {id: 2, src: `https://via.placeholder.com/150/771796`},{id: 3, src: `https://via.placeholder.com/150/771796`},{id: 4, src: `https://via.placeholder.com/150/771796`}], date: 1676847834, rating: 5},
    ]

}
module.exports = Product;
const Flowers = [
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
module.exports = Flowers;
const Bouquet = [
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
module.exports = Bouquet;
const ReviewsText = [
        {
        id: 1,
        name: "Анатолий Цой",
        email: "Eliseo@gardner.biz",
        city: "Владивосток",
        rating: 5,
        date: 1677841476761,
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      },
      {
        id: 2,
        name: "Анатолий Цой",
        email: "Jayne_Kuhic@sydney.com",
        city: "Владивосток",
        rating: 3,
        date: 1677841476761,
        body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
      },
      {
        id: 3,
        name: "Анатолий Цой",
        email: "Nikita@garfield.biz",
        city: "Владивосток",
        rating: 4,
        date: 1677841476761,
        body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
      },
      {
        id: 4,
        name: "Анатолий Цой",
        email: "Lew@alysha.tv",
        city: "Владивосток",
        rating: 5,
        date: 1677841476761,
        body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
      },
      {
        id: 5,
        name: "Анатолий Цой",
        email: "Hayden@althea.biz",
        city: "Владивосток",
        rating: 4,
        date: 1677841476761,
        body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
      },
      {
        id: 6,
        name: "Анатолий Цой",
        email: "Presley.Mueller@myrl.com",
        city: "Владивосток",
        rating: 3,
        date: 1677841476761,
        body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
      },
      {
        id: 7,
        name: "Анатолий Цой",
        email: "Dallas@ole.me",
        city: "Владивосток",
        rating: 4,
        date: 1677841476761,
        body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
      },
      {
        id: 8,
        name: "Анатолий Цой",
        email: "Mallory_Kunze@marie.org",
        city: "Владивосток",
        rating: 4,
        date: 1677841476761,
        body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
      },
      {
        id: 9,
        name: "Анатолий Цой",
        email: "Meghan_Littel@rene.us",
        city: "Владивосток",
        rating: 3,
        date: 1677841476761,
        body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
      },
      {
        id: 10,
        name: "Анатолий Цой",
        email: "Carmen_Keeling@caroline.name",
        city: "Владивосток",
        rating: 5,
        date: 1677841476761,
        body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
      },
      {
        id: 11,
        name: "Анатолий Цой",
        email: "Eliseo@gardner.biz",
        city: "Владивосток",
        rating: 5,
        date: 1677841476761,
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      },
      {
        id: 12,
        name: "Анатолий Цой",
        email: "Jayne_Kuhic@sydney.com",
        city: "Владивосток",
        rating: 3,
        date: 1677841476761,
        body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
      },
      {
        id: 13,
        name: "Анатолий Цой",
        email: "Nikita@garfield.biz",
        city: "Владивосток",
        rating: 4,
        date: 1677841476761,
        body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
      },
      {
        id: 14,
        name: "Анатолий Цой",
        email: "Lew@alysha.tv",
        city: "Владивосток",
        rating: 5,
        date: 1677841476761,
        body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
      },
      {
        id: 15,
        name: "Анатолий Цой",
        email: "Hayden@althea.biz",
        city: "Владивосток",
        rating: 4,
        date: 1677841476761,
        body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
      },
      {
        id: 16,
        name: "Анатолий Цой",
        email: "Presley.Mueller@myrl.com",
        city: "Владивосток",
        rating: 3,
        date: 1677841476761,
        body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
      },
      {
        id: 17,
        name: "Анатолий Цой",
        email: "Dallas@ole.me",
        city: "Владивосток",
        rating: 4,
        date: 1677841476761,
        body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
      },
      {
        id: 18,
        name: "Анатолий Цой",
        email: "Mallory_Kunze@marie.org",
        city: "Владивосток",
        rating: 4,
        date: 1677841476761,
        body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
      },
      {
        id: 19,
        name: "Анатолий Цой",
        email: "Meghan_Littel@rene.us",
        city: "Владивосток",
        rating: 3,
        date: 1677841476761,
        body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
      },
      {
        id: 20,
        name: "Анатолий Цой",
        email: "Carmen_Keeling@caroline.name",
        city: "Владивосток",
        rating: 5,
        date: 1677841476761,
        body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
      },
]
module.exports = ReviewsText;
const ReviewsPhoto = [
    {
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        img: "https://via.placeholder.com/600/92c952", 
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
     },
     {
         id: 2,
         name: "quo vero reiciendis velit similique earum",
         email: "Jayne_Kuhic@sydney.com",
         img: "https://via.placeholder.com/600/92c952",
         body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
     },
     {
         id: 3,
         name: "odio adipisci rerum aut animi",
         email: "Nikita@garfield.biz",
         img: "https://via.placeholder.com/600/771796",
         body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
     },
     {
         id: 4,
         name: "alias odio sit",
         email: "Lew@alysha.tv",
         img: "https://via.placeholder.com/600/771796",
         body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
     },
     {
         id: 5,
         name: "vero eaque aliquid doloribus et culpa",
         email: "Hayden@althea.biz",
         img: "https://via.placeholder.com/600/24f355",
         body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
       },
       {
         id: 6,
         name: "et fugit eligendi deleniti quidem qui sint nihil autem",
         email: "Presley.Mueller@myrl.com",
         img: "https://via.placeholder.com/600/24f355",
         body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
       },
       {
         id: 7,
         name: "repellat consequatur praesentium vel minus molestias voluptatum",
         email: "Dallas@ole.me",
         img: "https://via.placeholder.com/600/d32776",
         body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
       },
       {
         id: 8,
         name: "et omnis dolorem",
         email: "Mallory_Kunze@marie.org",
         img: "https://via.placeholder.com/600/d32776",
         body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
       },
       {
         id: 9,
         name: "provident id voluptas",
         email: "Meghan_Littel@rene.us",
         img: "https://via.placeholder.com/600/d32776",
         body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
       },
       {
         id: 10,
         name: "eaque et deleniti atque tenetur ut quo ut",
         email: "Carmen_Keeling@caroline.name",
         img: "https://via.placeholder.com/600/d32776",
         body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
       },
       {
        id: 11,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        img: "https://via.placeholder.com/600/92c952", 
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
     },
     {
         id: 12,
         name: "quo vero reiciendis velit similique earum",
         email: "Jayne_Kuhic@sydney.com",
         img: "https://via.placeholder.com/600/92c952",
         body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
     },
     {
         id: 13,
         name: "odio adipisci rerum aut animi",
         email: "Nikita@garfield.biz",
         img: "https://via.placeholder.com/600/771796",
         body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
     },
     {
         id: 14,
         name: "alias odio sit",
         email: "Lew@alysha.tv",
         img: "https://via.placeholder.com/600/771796",
         body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
     },
     {
         id: 15,
         name: "vero eaque aliquid doloribus et culpa",
         email: "Hayden@althea.biz",
         img: "https://via.placeholder.com/600/24f355",
         body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
       },
       {
         id: 16,
         name: "et fugit eligendi deleniti quidem qui sint nihil autem",
         email: "Presley.Mueller@myrl.com",
         img: "https://via.placeholder.com/600/24f355",
         body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
       },
       {
         id: 17,
         name: "repellat consequatur praesentium vel minus molestias voluptatum",
         email: "Dallas@ole.me",
         img: "https://via.placeholder.com/600/d32776",
         body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
       },
       {
         id: 18,
         name: "et omnis dolorem",
         email: "Mallory_Kunze@marie.org",
         img: "https://via.placeholder.com/600/d32776",
         body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
       },
       {
         id: 19,
         name: "provident id voluptas",
         email: "Meghan_Littel@rene.us",
         img: "https://via.placeholder.com/600/d32776",
         body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
       },
       {
         id: 20,
         name: "eaque et deleniti atque tenetur ut quo ut",
         email: "Carmen_Keeling@caroline.name",
         img: "https://via.placeholder.com/600/d32776",
         body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
       },
]
module.exports = ReviewsPhoto;



