const PlayersModel = require('../models/players');

exports.getData = () => {
    return PlayersModel;
}

exports.getTitle = () => {
    return PlayersModel.title;
}

exports.getName = () => {
    return PlayersModel.name;
}

exports.getClub = () => {
    return PlayersModel.club;
}

exports.getFollowers = () => {
    return PlayersModel.followers;
}

exports.getImage = () => {
    return PlayersModel.image;
}
