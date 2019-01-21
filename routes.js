const routes = require('express').Router();
const news = require('./news.json');
let logger = require('./logger');

routes.get('/', function (req, res) {
    console.log(res)
    res.status(200).send('Welcome to the testies news website!');
    log(req);
})

routes.get('/news', function (req, res) {
    let newsContent = Object.values(news);
    let newsTitles = newsContent.map(item => item.title);
    console.dir({ title: 'News', news: newsTitles, urls: Object.keys(news) });
    res.status(200).send(news)
    log(req);
});

routes.post('/news', function (req, res) {
    res.status(200).json({ type: req.method });
    log(req);
});

routes.get('/news/:id', function (req, res) {
    let newsId = req.params.id;
    let currentNews = news[newsId];
    if (!currentNews) {
        res.status(404).send('page not found')
    } else {
        res.status(200).send(currentNews)
    }
    log(req);
});

routes.put('/news/:id', function (req, res) {
    let newsId = req.params.id;
    res.status(200).json({ type: req.method, id: newsId });
    log(req);
});

routes.delete('/news/:id', function (req, res) {
    let newsId = req.params.id;
    res.status(200).json({ type: req.method, id: newsId });
    log(req);
});

let log = (req) => {
    logger.log({
        level: 'info',
        url: req.headers.host + req.url,
        method: req.method,
        date: new Date()
    });
}

module.exports = routes;
