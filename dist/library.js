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
// Everything we need from Meteor
var modules = [
    'Package',
    'Meteor',
    'Log',
    'Tracker',
    'DDP',
    'Mongo',
    'check',
    'Match',
    '_',
    'Random',
    'EJSON'
];
var moduleLinks = modules.map(function (module) { return (module + "=" + module); }).join('&');
var meteorExports = require('imports?!' +
    ("exports?" + moduleLinks + "!") +
    'meteor-client-side'); // This will only work in webpack
exports.Meteor = meteorExports.Meteor, exports._ = meteorExports._, exports.DDP = meteorExports.DDP, exports.Mongo = meteorExports.Mongo, exports.Tracker = meteorExports.Tracker, exports.Match = meteorExports.Match, exports.Random = meteorExports.Random, exports.EJSON = meteorExports.EJSON;
exports.default = exports.Meteor;
exports.Meteor._ = exports.Meteor.underscore = exports._;
require('meteor-htmljs')(exports.Meteor);
//const rxjs = require('rxjs');
var $ = require('jquery');
require('meteor-blaze')(exports.Meteor, $);
exports.Blaze = exports.Meteor.Blaze;
__export(require('./packages/ng2-accounts/main'));
__export(require('./packages/ng2-accounts-ui/main'));
__export(require('./packages/ng2-pagination/src/ng2-pagination'));
__export(require('./main'));
