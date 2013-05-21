var Lift = require('../models/lift').Model;

exports.lifts = function(req, res, next) {  
  var county = req.query.county || "";
    
  // Find all lifts
  Lift.findAll({
    where: {
      location: county
    }
  }).success(function(lifts) {
    res.send({
      lifts: lifts
    });
  });    
  
  return next();
}

exports.view_lift = function(req, res, next) {
  var lift_id = req.params.lift_id;
  
  if (typeof(lift_id) !== 'undefined' && lift_id > 0) {
    Lift.find(lift_id).success(function(lift) {
      res.send({
        lift: lift
      });
    });
  }
  
  return next();
}

exports.update_lift = function(req, res, next) {  
  Lift.find(req.params.lift_id).success(function(lift) {               
    lift.updateAttributes(req.body.lift).success(function() {
      res.send({
        lift: lift
      });
    });
  });
  
  return next();
}

exports.new_lift = function(req, res, next) {      
  Lift.create(req.body.lift).success(function(lift) {            
    res.send({
      lift: req.body.lift
    });    
  });
  
  return next();
} 
