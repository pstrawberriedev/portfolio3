var express = require('express');
var router = express.Router();

// Set up global object
var global = {
  
  title: "josh"
  
};

/* GET home */
router.get('/', function(req, res) {
	
  
  res.render('home', { 
    page: 'home',
    container: 'on',
    global: global
  });
  
  
});

/* GET inspiration */
router.get('/inspiration', function(req, res) {
	
  
  res.render('inspiration', { 
    page: 'inspiration',
    container: 'on',
    global: global
  });
  
  
});

/* GET portfolio */
router.get('/portfolio', function(req, res) {
	
  
  res.render('portfolio', { 
    page: 'portfolio',
    container: 'on',
    global: global
  });
  
  
});

/* GET resume */
router.get('/resume', function(req, res) {
	
  
  res.render('resume', { 
    page: 'resume',
    container: 'on',
    global: global
  });
  
  
});

/* GET inspiration */
router.get('/style', function(req, res) {
	
  
  res.render('style', { 
    page: 'style',
    container: 'on',
    global: global
  });
  
  
});



module.exports = router;