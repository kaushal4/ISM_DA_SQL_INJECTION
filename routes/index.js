var express = require('express');
const res = require('express/lib/response');
const {asyncQuery} = require('../db')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login page' });
});

router.get('/user', async (req,res,next)=>{
  let {username,pass} = req.query;
  let query = `Select age from user where(username='${username}' and pass='${pass}')`;
  let response = {};
  try{
    response = await asyncQuery(query);
  }catch(err){
    res.send(err);
    return;
  }
  if(response.length==0){
    res.send([{"age":"incorrect login!"}]);
    return;
  }
  res.json(response);
}); 

module.exports = router;
