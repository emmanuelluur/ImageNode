var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET upload listing. */
router.get('/upload', function(req, res, next) {
  res.render('upload');
});


/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});


/**
 * POST image
 */

 router.post('/upload/image', (req,res) => {
   let image  = req.files.img;
   let path = "./public/images/";
   let name = req.files.img.name;
   let usePath = "/images/" + name;
   let route = `${path}${name}`;
   image.mv(`${path}${name}`,err => {
    if(err) return res.status(500).send(err)

    return res.status(200).render('image',{image: usePath});
})
 })

module.exports = router;
