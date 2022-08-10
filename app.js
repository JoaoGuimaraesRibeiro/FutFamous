const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.listen(3030)
app.use(express.static(path.join(__dirname, 'public')));
const playerController = require('./controllers/player-controller');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res, next) {
    res.render('index', {
        title: "Famous Soccer Players",
        version: "0.0.0"
    });
});

app.get('/futfamous', (req, res, next) => {
    const playersData = playerController.getData();
    res.render('futfamous', { playersData: playersData });
});
