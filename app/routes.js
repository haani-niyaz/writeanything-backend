
var storyController = require('./controllers/storyController');

// create router 

router = require('express').Router();


router.get('/',storyController.home);
router.get('/seed', storyController.seed);


module.exports = router;