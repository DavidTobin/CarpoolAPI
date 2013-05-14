/**
 * General functionality 
 */

exports.countys = function(req, res, next) {
  res.send({
    countys: [{
      name: 'Wexford',
      id: 'WX'
    },
    
    {
      name: 'Carlow',
      id: 'CW'
    },
    
    {
      name: 'Dublin',
      id: 'D'
    }]
  });
  
  return next();
}
