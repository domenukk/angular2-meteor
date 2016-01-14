function buildGlobals() {

  //TODO: Figure out way to make this nice and configurable
  global.__meteor_runtime_config__ = {};
  __meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL = 'http://localhost:3000';


  // Sadly, we seem to have to use a jQuery like library here...
  if (typeof $ === "undefined") {
    var $ = require('jquery');
  }
  if (typeof _ === "undefined") {
    global._ = require('lodash'); // We do want underscore/lodash.
  }
  // everything we need for Meteor
  global.rxjs = require('rxjs');
  global.Meteor = require('meteor-client-side');
  global.Blaze = require("meteor-blaze")(Meteor, $);
  global.EJSON = global.Meteor.EJSON;
}


/* Instead of globals, we could use
 new webpack.ProvidePlugin({
   _: require('lodash');
   ...
 });
 But then we can no longer try it in the command prompt
 */
buildGlobals();

export * from './packages/ng2-accounts/main';
export * from './packages/ng2-accounts-ui/main';
export * from './packages/ng2-pagination/src/ng2-pagination';

export * from "./main"
