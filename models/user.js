var db        = require('./definitions').db,
    Sequelize = require('Sequelize');

exports.Model = db.define('User', {
  id: {type: Sequelize.INTEGER, primaryKey: true},
  name: Sequelize.STRING,  
  hash: Sequelize.STRING,
  registered: Sequelize.DATE
});
