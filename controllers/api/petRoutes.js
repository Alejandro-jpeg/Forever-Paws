const router = require('express').Router();
const Pet = require('../../models/Pet');

router.post('/', async (req, res) => {
    try {
        const petData = await Pet.create(req.body);
        

        res.status(200).json(petData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router; 