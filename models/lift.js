var db        = require('./definitions').db,
    Sequelize = require('Sequelize');

exports.Model = db.define('Lift', {
  id: {type: Sequelize.INTEGER, primaryKey: true},
  name: Sequelize.STRING,
  date: Sequelize.BIGINT,
  description: Sequelize.TEXT,
  paid: Sequelize.BOOLEAN,
  user: Sequelize.INTEGER,
  location: Sequelize.STRING,
  destination_coords: Sequelize.STRING,
  destination: Sequelize.STRING,
  registered: Sequelize.BOOLEAN
});
