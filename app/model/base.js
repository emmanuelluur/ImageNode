/**
 * Write by Emmanuel Lucio Urbina
 * 2019
 * DB main
 */

const Sequelize = require('sequelize');
const Operators = Sequelize.Op;
const Model = Sequelize.Model; // ORM MODELS
/**
 * Crea conexión a servidor
 */

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT,
  logging: false // quita los logs (creacion tabla, consultas)
});

module.exports = {
  Operators,
  Sequelize,
  sequelize,
  Model
}
