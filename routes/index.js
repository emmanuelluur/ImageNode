const express = require('express');
const router = express.Router();
const indexController = require("../app/controller/indexController");
const uploadController = require("../app/controller/uploadController");
/* GET home page. */
router.get('/', indexController.index);
router.get('/profile/:id_profile', uploadController.getProfile);
/* POST MOVE IMAGE */
router.post('/upload/save', uploadController.move);
module.exports = router;
