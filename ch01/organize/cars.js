var wheels = require('./wheels');
var Control = require('./control');

wheels.init("winter");
wheels.info();

var c = new Control();
c.forward();
c.right();
