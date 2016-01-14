global.Meteor = require('meteor-client');
global.Blaze = require('meteor-blaze');
global.EJSON = require('meteor-ejson-safe');
global.rxjs = require('rxjs');
/* new webpack.ProvidePlugin({
  Meteor: require("meteor-client")
});
*/


export * from './packages/ng2-accounts/main';
export * from './packages/ng2-accounts-ui/main';
export * from './packages/ng2-pagination/src/ng2-pagination';

export * from "./main"
