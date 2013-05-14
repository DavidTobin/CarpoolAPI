var Sequelize   = require("sequelize"),
    sequelize   = new Sequelize('gizalift_dev', 'root', 'root123', {
      logging: false
    });


module.exports = {
  db: sequelize
};
