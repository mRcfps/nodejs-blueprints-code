var AirConditioning = require('./air');
var air = new AirConditioning();

air.on('started', function (data) {
  console.log("Status: " + data.status);
});

air.start();