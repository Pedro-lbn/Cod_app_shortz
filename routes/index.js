var express = require('express');
var router = express.Router();

/* GET home page. */  // requisicao GET para a pagina inicial
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// requisicao GET para formulario de registro
router.get('/register', function(req, res, next){
  res.render('register');
});



module.exports = router;
