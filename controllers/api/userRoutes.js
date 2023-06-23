const router = require('express').Router();
const {User} = require('../../models/User');

//USER LOGIN 
router.post('/login', async (req, res) => {
    try {
        //Checks for the email
        const dbUSerData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        if(!dbUSerData){
            res.status(400).json({message: 'Incorrect email or password'})
            return;
        }
        //Checks for the password
        const validPassword = await dbUSerData.checkPassword(req.body.password);
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
  