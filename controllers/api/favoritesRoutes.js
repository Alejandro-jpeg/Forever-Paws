const router = require('express').Router();
const {FavoritePet} = require('../../models');

// This endpoint is used to GET the favorites list from a user
router.get('/:user_id', async(req, res) => {

    console.log("Hello");
    try {

        const user_id = req.params.user_id;
        const favorites = await FavoritePet.findAll({where: {user_id}});
        res.json(favorites);

    }
    catch(err) {

        console.error(err);
        res.status(500).json({message: 'Internal server error'});

    }

});

// This endpoint is used to toggle favorite status of a pet for a specific user
router.post('/toggleFavorite', async(req, res) => {

    try {

        console.log(req.body);

        const {user_id, pet_id, shouldFavorite} = req.body;

        if(shouldFavorite) {

            // Add to favorites
            const favorite = await FavoritePet.create({user_id, pet_id});
            console.log(favorite);

        }
        else {

            // Remove from favorites
            await FavoritePet.destroy({where: {user_id, pet_id}});
        }
        res.status(200).json({message: 'Operation successful'});

    }
    catch(err) {

        console.error(err);
        res.status(500).json({err});

    }

});

module.exports = router;