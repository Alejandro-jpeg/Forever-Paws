const router = require('express').Router();
const { Agency, Pet, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // Fetch data from the models
        const locationData = await Agency.findAll({ attributes: ['location'], group: ['location'] });
        const typeData = await Pet.findAll({ attributes: ['pet_type'], group: ['pet_type'] });
        const breedsData = await Pet.findAll({ attributes: ['pet_breed'], group: ['pet_breed'] });
        const gendersData = await Pet.findAll({ attributes: ['pet_gender'], group: ['pet_gender'] });
        const ageRangesData = await Pet.findAll({ attributes: ['pet_age_range'], group: ['pet_age_range'] });
        const agenciesData = await Agency.findAll({ attributes: ['name'], group: ['name'] });
    
        // Serialize data to be used by handlebars
        const cities = locationData.map((agency) => agency.location);
        const types = typeData.map((pet) => pet.pet_type);
        const breeds = breedsData.map((breed) => breed.pet_breed);
        const genders = gendersData.map((gender) => gender.pet_gender);
        const ageRanges = ageRangesData.map((ageRange) => ageRange.pet_age_range);
        const agencies = agenciesData.map((agency) => agency.name);
    
        // Render the homepage template and pass the data
        res.render('homepage', {
            cities,
            types,
            breeds,
            genders,
            ageRanges,
            agencies
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    
    res.render('login');
});


router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    
    res.render('signup');
});

router.get('/aboutus', async(req, res) => {
    res.render('aboutus');
})

router.get('/adoption', async(req, res) => {
    res.render('adoption_process');
})

router.get('/literature', async(req, res) => {
    res.render('pet_literature');
})

router.get('/ally', async(req, res) => {
    res.render('become_ally');
})

router.get('/submitpet', async(req, res) => {
    res.render('submit_pet');
})

router.post('/query_results', async(req, res) => {
    res.json(req.body);
    console.log(req.body);
})

router.get('/query_results', async(req, res) => {
    /* try {
        const petResults = await Pet.findAll({
            where:{
                pet_type: req.body.type,
                pet_breed: req.body.breed,
                pet_gender: req.body.gender,
                pet_age_range: req.body.ageRange,
                agency_id: req.body.agency
            },
        }); */
        res.render('query_results'); //,Pet[petResults]
    /* } catch (err) {
        console.log(err);
    } */
});


router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
        });
    
        // Check if user data exists
        if (!userData) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
    
        // Serialize data to be used by handlebars
        const user = userData.get({ plain: true });
    
        res.render('dashboard', {
            ...user,
            loggedIn: true
        });
        } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
        }
});


module.exports = router;