/**
 * server.js
 *  REST server for GizALift.ie
 * 
 * @author David Tobin <dtobin08@gmail.com> 
 */

var restify         = require('restify'),    
    listenPort      = 3000,
    DEBUG           = true,
    db              = require('./models/definitions').db,  
    passport        = require('passport'),
    OAuth2Strategy  = require('passport-oauth').OAuth2Strategy
    server          = restify.createServer({  
      name: 'Carpool API',
    });

// Let's start the server
server.listen(listenPort);
server.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
);
server.use(restify.bodyParser({ mapParams: false }));
server.use(passport.initialize());
server.use(passport.session());
server.use(restify.jsonp());
server.use(restify.dateParser());

console.log("*-------------------------------------*");
console.log("|         GizALift API Server         |");
console.log("|                                     |");
console.log("| Listen Port: " + listenPort + "                   |");
console.log("| Debug Mode: " + DEBUG + "                    |");
console.log("|                                     |");
console.log("*-------------------------------------*");

// Server Controllers
var general = require('./routes/general'),
    lift    = require('./routes/lift')

// Models
var liftModel = require('./models/lift'),
    userModel = require('./models/user');

// DB Sync
db.sync().success(function() {
  console.log("Synced all tables with DB...");
});


// Pre routing
server.pre(function(req, res, next) {
  console.log("Fetching %s...\n", req.url);  
  
  return next();
});

// Authentication
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  userModel.findById(id, function(err, user) {
    done(err, user);
  });
});

// #### Routes

// General
server.get('countys', general.countys);

// Lifts
server.get('lifts', lift.lifts);
server.post('lifts', lift.new_lift);
server.put('lifts/:lift_id', lift.update_lift);

