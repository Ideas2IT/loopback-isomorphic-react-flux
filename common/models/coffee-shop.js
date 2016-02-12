var utils = require('../../node_modules/loopback/lib/utils');
module.exports = function(CoffeeShop) {
	
CoffeeShop.status = function(cb) {
    cb = cb || utils.createPromiseCallback();
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var OPEN_HOUR = 6;
    var CLOSE_HOUR = 18;
    console.log('Current hour is ' + currentHour);
    var response;
    if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = 'Yes, We are open for business.';
    } else {
      response = 'Sorry, we are closed. Open daily from 6am to 6pm.';
    }
    cb(null, response);
    return cb.promise;
  };

  CoffeeShop.remoteMethod(
    'status',
    {
      http: {path: '/status', verb: 'get'},
      returns: {arg: 'status', type: 'string'}
    }
  );
};
