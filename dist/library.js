function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
global.Meteor = require('meteor-client');
global.Blaze = require('meteor-blaze');
global.EJSON = require('meteor-ejson-safe');
global.rxjs = require('rxjs');
/* new webpack.ProvidePlugin({
  Meteor: require("meteor-client")
});
*/
__export(require('./packages/ng2-accounts/main'));
__export(require('./packages/ng2-accounts-ui/main'));
__export(require('./packages/ng2-pagination/src/ng2-pagination'));
__export(require("./main"));
