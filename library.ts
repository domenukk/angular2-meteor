function buildGlobals() {
  // We can but we don't want to use a jQuery like library.
  if (typeof $ === "undefined") {
    var $ = null;
  }

  global._ = require('lodash'); // We do want underscore/lodash.

  // everything we need for Meteor
  global.rxjs = require('rxjs');
  global.Meteor = require('meteor-client')($, _);
  global.Blaze = global.Meteor.Blaze;
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
