/// <reference path="../typings/angular2-meteor.d.ts" />
'use strict';
var bootstrap_1 = require('angular2/bootstrap');
function bootstrap(appComponentType, providers) {
    if (providers === void 0) { providers = null; }
    bootstrap_1.bootstrap(appComponentType, providers);
}
exports.bootstrap = bootstrap;
