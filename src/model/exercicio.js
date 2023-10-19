const sequelize = require('../database.js')

const Pessoa = sequelize.define('pessoas', {})

module.exports = Pessoa