var Lift = require('../models/lift').Model;

exports.lifts = function(req, res, next) {  
  var county = req.query.county || "";
    
  // Find all lifts
  Lift.findAll({
    where: {
      destination: county
    }
  }).success(function(lifts) {
    res.send({
      lifts: lifts
    });
  });    
  
  return next();
}

exports.update_lift = function(req, res, next) {  
  Lift.find(req.params.lift_id).success(function(lift) {    
    // Set correct date
    if (req.body.lift.date) {
      req.body.lift.date = +new Date(req.body.lift.date);
    }
    
    lift.updateAttributes(req.body.lift).success(function() {
      res.send({
        lift: lift
      });
    });
  });
  
  return next();
}

exports.new_lift = function(req, res, next) {  
  req.body.lift.date = +new Date;  
  
  Lift.create(req.body.lift).success(function(lift) {            
    res.send({
      lift: req.body.lift
    });    
  });
  
  return next();
} 
