const uuid = require('uuid')
const path = require('path');
const ApiError = require('../error/ApiError');

let ReviewsPhoto = [
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

class ReviewsPhotoController {
    create(req, res, next) {
        try {
            let {fullName, email, comment} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const id = +ReviewsPhoto.length + 1
            ReviewsPhoto.push({id: id, name: fullName, email: email, body: comment, img: fileName});
            return res.json(ReviewsPhoto)
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
        let reviews = ReviewsPhoto.slice(start, end);
        return res.json(reviews)
    }

    getOne(req, res) {
        const {id} = req.params
        const review = ReviewsPhoto.find(b => b.id === +id)
        return res.json(review)
    }
}

module.exports = new ReviewsPhotoController()
