const store = require('./model/base');
const sequelize = store.sequelize;
const op = store.Operators;
const Uploads = require('./model/uploadModel');

/**
 * relaciones abajo
 */




/**
 * Sync models
 */

sequelize.sync()
    .then(() => {
        console.log("Las tablas/relaciones fueron sincronizadas");
    })
    .catch(err => {
        console.log(err);
    })

module.exports = {
    Uploads,
    op // permite en el where el > >= || en WHERE
}