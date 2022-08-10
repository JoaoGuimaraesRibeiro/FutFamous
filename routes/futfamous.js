const express = require('express');
const router = express.Router();
const playerController = require ('./controllers/player-controller');

router.get ('/futfamous',(req, res, next) => {
    const playersData = playerController.getData();
    res.render('futfamous', playersData);
});

module.exports = router;