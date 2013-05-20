var Sequelize   = require("sequelize"),
    sequelize   = new Sequelize('gizalift_dev', 'root', 'root123', {
      
    });


module.exports = {
  db: sequelize
};
