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

router.get('/login', async(req, res) => {
    res.render('login');
})

router.get('/signup', async(req, res) => {
    res.render('signup');
})

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

router.get('/dashboard', async(req, res) => {
    if(req.session.loggedIn = true){
        res.render('dashboard');
    }else{
        res.render('login');
    }
})

module.exports = router;