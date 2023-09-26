let express = require('express');
let router = express.Router();

/* GET home page */
router.get('/news', function (req, res, next) {

    let news = [
        {
            id: 1,
            title: 'Новость 1',
            time: '13:15',
        },
        {
            id: 2,
            title: 'Новость 2',
            time: '14:30',
        },
    ];

    res.render('index', {title: 'Заголовок', news});
});

/* GET page news */
router.get('/news/:id', function (req, res, next) {
    let newsId = req.params.id;
    res.render('itemNews', {title: 'Заголовок ' + newsId});
});

module.exports = router;
