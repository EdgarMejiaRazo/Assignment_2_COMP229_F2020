var express = require('express');
var router = express.Router();

/* GET home page. THIS IS ONE ROUTE AND IT IS TO GET TO HOME*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to my Personal Portfolio. I really apreciate your interest.',});
});

/* GET home page. THIS IS ONE ROUTE AND IT IS TO GET TO HOME. ADDED A WELCOME MESSAGE TO BE PASSES THROUGH THE ROUTE WITH THE USE OF A VARIABLE*/
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Welcome to my Personal Portfolio. I really apreciate your interest.'});
});

/* GET About Us page. THIS IS ONE ROUTE AND IT IS TO GET TO ABOUT ME PAGE*/
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Who am I...',
name:"Edgar Adrian Mejia Razo",
paragraph:"Im an Electronic Systems, Software and Telecommunications Engineer; with over 4 years of experience in analysis and preparation of projects. Interested in developing technical skills and knowledge by contributing to the overall and particular objectives of the company",
key:'Key Competencies',
resume:'Fell free to have a look at my Resume:'});
});

/* GET Products page. THIS IS ONE ROUTE AND IT IS TO GET TO PROJECTS / ADDED NEW VARIABLES FOR DESCRIPTIONS OF PROJECTS*/
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects',
project1:'12/2014- 08/2009 -  Research on Engineering Project in Creation, Analysis and Reproduction of Binaural Sounds and their therapeutic application.Testing and analysis of sound reproducing devices I was in charge of the whole project. Results showed disminution of stress levels in participants',
project2:'08/2009- 12/2009 - Musical box. We programmed a muscial box with arduino and light sensors. Passing your hand through a sensor provoked a different sound allowing us to perform a melody without touching any physical surface. I was in charge of Hardware prototipe.',
project3:'08/2012- 12/2012 - Simplistic Cooling System with AtMega 16 microcontroller and 2 fans. With temperature sensores, we monitored the heat increases that made the fans be turned on through the microcontroller. I was in charge of hardware wiring and programming.'});
});

/* GET Services page. THIS IS ONE ROUTE AND IT IS TO GET TO SERVICES*/
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});


/* GET Contact Us page. THIS IS ONE ROUTE AND IT IS TO GET TO CONTACT ADDED VARIABLES FOR MESSAGES IN CONTACT PAGE*/
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me',
message:'Leave me a message' });
});

module.exports = router;
