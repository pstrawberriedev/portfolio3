var express = require('express');
var router = express.Router();

// Set up global object
var global = {
  
  title: "Josh"
  
};

/* GET home */
router.get('/', function(req, res) {
	
  
  res.render('home', { 
    page: 'home',
    container: 'on',
    global: global
  });
  
  
});


module.exports = router;