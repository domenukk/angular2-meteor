global.Meteor = require('meteor-client');
global.Blaze = require('meteor-blaze');
global.EJSON = require('meteor-ejson-safe');
global.rxjs = require('rxjs');
/* new webpack.ProvidePlugin({
  Meteor: require("meteor-client")
});
*/

module.require = require("./main");
