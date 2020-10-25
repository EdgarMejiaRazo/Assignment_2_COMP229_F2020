var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. THIS IS ONE ROUTE AND IT IS TO GET TO HOME*/
router.get('/', indexController.displayHomePage);

/* GET home page. THIS IS ONE ROUTE AND IT IS TO GET TO HOME. ADDED A WELCOME MESSAGE TO BE PASSES THROUGH THE ROUTE WITH THE USE OF A VARIABLE*/
router.get('/home', indexController.displayHomePage);

/* GET About Us page. THIS IS ONE ROUTE AND IT IS TO GET TO ABOUT ME PAGE*/
router.get('/about', indexController.displayAboutPage);
/* GET Products page. THIS IS ONE ROUTE AND IT IS TO GET TO PROJECTS / ADDED NEW VARIABLES FOR DESCRIPTIONS OF PROJECTS*/
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. THIS IS ONE ROUTE AND IT IS TO GET TO SERVICES*/
router.get('/services', indexController.displayServicesPage);


/* GET Contact Us page. THIS IS ONE ROUTE AND IT IS TO GET TO CONTACT ADDED VARIABLES FOR MESSAGES IN CONTACT PAGE*/
router.get('/contact', indexController.displayContactPage);

module.exports = router;
