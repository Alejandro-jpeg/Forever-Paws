const router = require('express').Router();
const User = require('../../models/User');

//USER LOGIN 
router.post('/login', async (req, res) => {
    try {
        //Checks for the email
        const dbUserData = await User.findOne({
            where: {
                email_address: req.body.email_address
            },
        });
        
        if(!dbUserData){
            res.status(400).json({message: 'Incorrect email or password'})
            return;
        }
        //Checks for the password  //THE ERROR IS IN THIS BLOCK OF CODE ERROR ERROR ERROR ERROR ERROR ERROR 
        const validPassword = await dbUserData.checkPassword(req.body.password);
        if(!validPassword){
            res.status(400).json({message: 'Incorrect email or password'})
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.loggedIn = true;
            res.json({user: dbUserData, message: "You are now loged in!"});
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//USER LOGOUT
router.post('/logout', (req, res) => {
    // When the user logs out, destroy the session
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;