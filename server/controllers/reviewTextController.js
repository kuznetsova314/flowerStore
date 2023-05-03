const uuid = require('uuid')
const path = require('path');
const ApiError = require('../error/ApiError');

let ReviewsText = [
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

class ReviewsTextController {
    create(req, res, next) {
        try {
            let {fullName, email, city, comment, currentRating} = req.body
            const id = +ReviewsText.length + 1
            const date = Date.now()
            ReviewsText.push({id: id, name: fullName, email: email, city: city, body: comment, date: date, rating: currentRating});
            return res.json(ReviewsText)
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
        let reviewsText = ReviewsText.slice(start, end);
        return res.json(reviewsText)
    }

    getOne(req, res) {
        const {id} = req.params
        const reviewText = ReviewsText.find(b => b.id === +id)
        return res.json(reviewText)
    }
}

module.exports = new ReviewsTextController()
