/**
 * Model Upload
 */
const store = require('./base');
const sequelize = store.sequelize;

class UploadModel extends store.Model { }
UploadModel.init({
    id: {
        type: store.Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    image: {
        type: store.Sequelize.STRING,
    },
   
    status: {
        type: store.Sequelize.BOOLEAN,
        defaultValue: 1
    },
   


},
    {
        sequelize,
        modelName: 'tbl_images' // nombre de tabla
    });

module.exports = UploadModel;

