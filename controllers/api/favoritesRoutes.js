const router = require('express').Router();
const {FavoritePet} = require('../../models/FavoritePet');

// This endpoint is used to GET the favorites list from a user
router.get('/dashboard', async(req, res) => {

    try {

        // Here goes all the logic to GET the favorites list from the user
        const favorites = await FavoritePet.findAll();
        res.json(favorites);

    }
    catch(err) {

        console.error(err);
        res.status(500).json({message: 'Internal server error'});

    }

});

// This endpoint is used to ADD a favorite to the user
router.post('/dashboard', async(req, res) => {

    try{

        // Here goes all the logic to ADD a favorite to the user
        const newFavorite = await FavoritePet.create(req.body);
        res.status(200).json({message: 'Created new favorite'});

    }
    catch(err) {

        console.error(err);
        res.status(500).json({message: 'Internal server error'});

    }

});