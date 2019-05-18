const sync = require('../syncModels');

exports.getProfile = (req, res) => {
    let id_get = req.params.id_profile;
    sync.Uploads.findOne({
        where: {
            id: id_get
        }
    })
    .then(success => {
        res.render('image', {imagen: success.image});
    })
    .catch(err => {
        res.send(err);
    })
}

exports.move = (req, res) => {
    let image = req.files.img;
    let path = "./public/images/";
    let name = req.files.img.name;
    let usePath = "/images/" + name;
    let route = `${path}${name}`;

    image.mv(`${path}${name}`,err => {
        if(err) res.status(500).send(err)
        /**
         * code for save on DB
         */
        sync.Uploads.create({
            image: usePath,
        })
        .then(success => {
            res.send('save ok');
        })
        .catch(err => {
            res.send(err);
        })
        
    })
   
}