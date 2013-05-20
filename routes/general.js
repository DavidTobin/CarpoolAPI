/**
 * General functionality 
 */

exports.countys = function(req, res, next) {
  res.send({
    countys: [
    {
      name: 'Cork',
      id: 'C'  
    },
    
    {
      name: 'Clare',
      id: 'CE'
    },
    
    {
      name: 'Cavan',
      id: 'CN'
    },
    
    {
      name: 'Carlow',
      id: 'CW'
    },
    
    {
      name: 'Dublin',
      id: 'D'
    },
    
    {
      name: 'Donegal',
      id: 'DL'
    },
    
    {
      name: 'Galway',
      id: 'G'
    },
    
    {
      name: 'Kildare',
      id: 'KE'      
    },
    
    {
      name: 'Kilkenny',
      id: 'KK'
    },
    
    {
      name: 'Kerry',
      id: 'KY'
    },
    
    {
      name: 'Limerick',
      id: 'L'
    },
    
    {
      name: 'Leitrim',
      id: 'LM'
    },
    
    {
      name: 'Laois',
      id: 'LS'
    },
    
    {
      name: 'Meath',
      id: 'MH'
    },
    
    {
      name: 'Monaghan',
      id: 'MN'
    },
    
    {
      name: 'Mayo',
      id: 'MO'
    },
    
    {
      name: 'Offaly',
      id: 'OY'
    },
    
    {
      name: 'Roscommon',
      id: 'RN'
    },
    
    {
      name: 'Sligo',
      id: 'SO'
    },
    
    {
      name: 'Tipperary',
      id: 'TN'
    },
    
    {
      name: 'Waterford',
      id: 'W'
    },
    
    {
      name: 'Wexford',
      id: 'WX'
    },
    
    {
      name: 'Wicklow',
      id: 'WW'
    }    
    ]
  });
  
  return next();
}
