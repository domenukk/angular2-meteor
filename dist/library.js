function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
/** This line sets an import that will use
 DDP_DEFAULT_CONNECTION_URL: 'http://localhost:3000'
 no other DDP_DEFAULT_CONNECTION_URL has been set before.
 Then it will export everything Meteor.
 */
var meteorExports = require('imports?' +
    '__meteor_runtime_config__=>{DDP_DEFAULT_CONNECTION_URL: ' +
    '(typeof DDP_DEFAULT_CONNECTION_URL === "undefined")? "http://localhost:3000": DDP_DEFAULT_CONNECTION_URL}' +
    '&module=>{}!' +
    'exports?' +
    'Package&Meteor&Log&Tracker&DDP&Mongo&check&Match&_&Random&EJSON!' +
    'meteor-client-side'); // (This reqire line will only work in webpack)
exports.Meteor = meteorExports.Meteor, exports._ = meteorExports._, exports.DDP = meteorExports.DDP, exports.Mongo = meteorExports.Mongo, exports.Tracker = meteorExports.Tracker, exports.Match = meteorExports.Match, exports.Random = meteorExports.Random, exports.EJSON = meteorExports.EJSON;
exports.default = exports.Meteor;
exports.Meteor._ = exports.Meteor.underscore = exports._;
require('meteor-htmljs')(exports.Meteor);
if (typeof METEOR_NO_BLAZE === 'undefined') {
    // Load jQuery and Blaze and export it.
    var $ = require('jquery');
    require('meteor-blaze')(exports.Meteor, $);
    exports.Blaze_1 = exports.Meteor.Blaze;
    // Export accounts-ui (needs Blaze)
    __export(require('./packages/ng2-accounts/main'));
    __export(require('./packages/ng2-accounts-ui/main'));
}
__export(require('./packages/ng2-pagination/src/ng2-pagination'));
__export(require('./main'));
