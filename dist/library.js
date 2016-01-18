function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// TODO: Do we need to configure this?
//noinspection TypeScriptUnresolvedVariable
if (typeof __meteor_runtime_config__ === 'undefined') {
    //noinspection TypeScriptUnresolvedVariable
    globals.__meteor_runtime_config__ = {
        DDP_DEFAULT_CONNECTION_URL: 'http://localhost:3000'
    };
}
var meteorExports = require('imports?' +
    '__meteor_runtime_config__=>{DDP_DEFAULT_CONNECTION_URL: "http://localhost:3000"}!' +
    'exports?Package=Package&Meteor=Meteor&Log=Log&Tracker=Tracker&DDP=DDP' +
    '&Mongo=Mongo&check=check&Match=Match&_=_&Random=Random&EJSON=EJSON!' +
    'meteor-client-side'); // This will only work in webpack
exports.Meteor = meteorExports.Meteor, exports._ = meteorExports._, exports.DDP = meteorExports.DDP, exports.Mongo = meteorExports.Mongo, exports.Tracker = meteorExports.Tracker, exports.Match = meteorExports.Match, exports.Random = meteorExports.Random, exports.EJSON = meteorExports.EJSON;
exports.default = exports.Meteor;
exports.Meteor._ = exports.Meteor.underscore = exports._;
require('meteor-htmljs')(exports.Meteor);
//const rxjs = require('rxjs');
exports.$ = require('jquery');
require('meteor-blaze')(exports.Meteor, exports.$);
exports.Blaze = exports.Meteor.Blaze;
__export(require('./packages/ng2-accounts/main'));
__export(require('./packages/ng2-accounts-ui/main'));
__export(require('./packages/ng2-pagination/src/ng2-pagination'));
__export(require('./main'));
