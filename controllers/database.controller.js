'use strict';

const models = require('../models');

const EventController = require('../controllers').EventController;
const MediaController = require('../controllers').MediaController;
const GameLevelController = require('../controllers').GameLevelController;
const ElementTypeController = require('../controllers').ElementTypeController;
const ProductController = require('../controllers').ProductController;

const data = {
    'elementType' : [
        {
            'name' : 'Cadran',
            'description' : 'Super description du cadran'
        },
        {
            'name' : 'Boitier',
            'description' : 'Super description du boitier'
        },
        {
            'name' : 'Bracelet',
            'description' : 'Super description du bracelet'
        }
    ],
    'gameLevel' : [
        {
            'idElementType' : 1
        },
        {
            'idElementType' : 2
        },
        {
            'idElementType' : 3
        }
    ],
    'media' : [
        {
            'idGameLevel' : 1,
            'url' : 'http://localhost:6789/media/picture/dial_1.png'
        },
        {
            'idGameLevel' : 1,
            'url' : 'http://localhost:6789/media/picture/dial_2.png'
        },
        {
            'idGameLevel' : 1,
            'url' : 'http://localhost:6789/media/picture/dial_3.png'
        },
        {
            'idGameLevel' : 1,
            'url' : 'http://localhost:6789/media/picture/dial_4.png'
        },
        {
            'idGameLevel' : 1,
            'url' : 'http://localhost:6789/media/picture/dial_5.png'
        },
        {
            'idGameLevel' : 1,
            'url' : 'http://localhost:6789/media/picture/dial_6.png'
        },
        {
            'idGameLevel' : 2,
            'url' : 'http://localhost:6789/media/picture/outer_1.png'
        },
        {
            'idGameLevel' : 2,
            'url' : 'http://localhost:6789/media/picture/outer_2.png'
        },
        {
            'idGameLevel' : 3,
            'url' : 'http://localhost:6789/media/picture/bracelet_1.png'
        },
        {
            'idGameLevel' : 3,
            'url' : 'http://localhost:6789/media/picture/bracelet_2.png'
        },
        {
            'idGameLevel' : 3,
            'url' : 'http://localhost:6789/media/picture/bracelet_3.png'
        },
        {
            'idGameLevel' : 3,
            'url' : 'http://localhost:6789/media/picture/bracelet_4.png'
        },
        {
            'idGameLevel' : 3,
            'url' : 'http://localhost:6789/media/picture/bracelet_5.png'
        },
        {
            'idGameLevel' : 3,
            'url' : 'http://localhost:6789/media/picture/bracelet_6.png'
        },
        {
            'idGameLevel' : 3,
            'url' : 'http://localhost:6789/media/picture/bracelet_7.png'
        },
        {
            'idGameLevel' : 3,
            'url' : 'http://localhost:6789/media/picture/bracelet_8.png'
        },
    ],
    'user' : [
        {
            'username': 'test',
            'password': 'test'
        },
        {
            'username': 'admin',
            'password': 'admin'
        },
        {
            'username': 'user',
            'password': 'user'
        }
    ],
    'score' : [
        {
            'value' : 4000,
            'idUser': 1,
            'idGameLevel': 1
        },
        {
            'value' : 7000,
            'idUser': 1,
            'idGameLevel': 2
        },
        {
            'value' : 13333,
            'idUser': 1,
            'idGameLevel': 3
        }
    ],
    'event' : [
        {
            'title': 'Démonstration de l\'application ',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula eros eget cursus rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec elit lectus, accumsan et vehicula eleifend, sollicitudin a sapien. Nunc accumsan nunc orci, at blandit dolor suscipit sit amet. Duis pulvinar id dolor sed lacinia. Cras eleifend, nunc ac porttitor imperdiet, odio tortor tincidunt ligula, eu congue urna ipsum ut nisi. Ut euismod tortor eget mi facilisis iaculis',
            'link': 'https://google.fr',
            'image': 'localhost:6789/media/picture/watch_display.jpg'
        },
        {
            'title': 'Présentation !',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula eros eget cursus rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec elit lectus, accumsan et vehicula eleifend, sollicitudin a sapien. Nunc accumsan nunc orci, at blandit dolor suscipit sit amet. Duis pulvinar id dolor sed lacinia. Cras eleifend, nunc ac porttitor imperdiet, odio tortor tincidunt ligula, eu congue urna ipsum ut nisi. Ut euismod tortor eget mi facilisis iaculis',
            'link': 'https://google.fr',
            'image': 'localhost:6789/media/picture/watch_display.jpg'
        },
        {
            'title': 'Oui !',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula eros eget cursus rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec elit lectus, accumsan et vehicula eleifend, sollicitudin a sapien. Nunc accumsan nunc orci, at blandit dolor suscipit sit amet. Duis pulvinar id dolor sed lacinia. Cras eleifend, nunc ac porttitor imperdiet, odio tortor tincidunt ligula, eu congue urna ipsum ut nisi. Ut euismod tortor eget mi facilisis iaculis',
            'link': 'https://google.fr',
            'image': 'localhost:6789/media/picture/watch_display.jpg'
        },
        {
            'title': 'Super !',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula eros eget cursus rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec elit lectus, accumsan et vehicula eleifend, sollicitudin a sapien. Nunc accumsan nunc orci, at blandit dolor suscipit sit amet. Duis pulvinar id dolor sed lacinia. Cras eleifend, nunc ac porttitor imperdiet, odio tortor tincidunt ligula, eu congue urna ipsum ut nisi. Ut euismod tortor eget mi facilisis iaculis',
            'link': 'https://google.fr',
            'image': 'localhost:6789/media/picture/watch_display.jpg'
        }
    ],
    'product' : [
        {
            'label' : 'Montre à bracelet rouge',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula eros eget cursus rhoncus. Vestibulum ante ipsum primis',
            'price' : 249.00
        },
        {
            'label' : 'Montre à bracelet vert',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula eros eget cursus rhoncus. Vestibulum ante ipsum primis',
            'price' : 249.00
        },
        {
            'label' : 'Montre à bracelet bleu',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula eros eget cursus rhoncus. Vestibulum ante ipsum primis',
            'price' : 249.00
        },
        {
            'label' : 'Montre à bracelet orange',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula eros eget cursus rhoncus. Vestibulum ante ipsum primis',
            'price' : 249.00
        }
    ]
};

class DatabaseController{
    async seed() {
        await ElementTypeController.add(data['elementType']).then(r =>{
            console.log("ElementType table seeded.");
         });
        await GameLevelController.add(data['gameLevel']).then(r =>{
            console.log("GameLevel table seeded.");
        });
        await MediaController.add(data['media']).then(r =>{
            console.log("Media table seeded.");
        });
        await EventController.add(data['event']).then(r =>{
            console.log("Event table seeded.");
        });
        await ProductController.add(data['product']).then(r =>{
            console.log("Product table seeded.");
        });
    }
}

module.exports = new DatabaseController();