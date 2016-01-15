/*
 * Disclaimer: Please don't judge my general code quality on this file.
 * It's supposed to be a hackish hack to make this work _somehow_.
 * If you know a better way to do it, feel free <3
 *
 * TODO: Make this webpack-unglobal somehow
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
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
    require('script-loader!meteor-client-side'); // this will only work in webpack
    Meteor._ = Meteor.underscore = _;
    require("meteor-htmljs")(Meteor);
    require("meteor-blaze")(Meteor, $);
    global.Blaze = Meteor.Blaze;
}
/* Instead of globals, we could use
 new webpack.ProvidePlugin({
   _: require('lodash');
   ...
 });
 But then we can no longer try it in the command prompt
 */
__export(require('./packages/ng2-accounts/main'));
__export(require('./packages/ng2-accounts-ui/main'));
__export(require('./packages/ng2-pagination/src/ng2-pagination'));
__export(require("./main"));
//# sourceMappingURL=library.js.map