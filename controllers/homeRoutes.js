const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage');
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