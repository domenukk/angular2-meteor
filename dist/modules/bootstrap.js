/// <reference path="../typings/angular2-meteor.d.ts" />
'use strict';
var bootstrap_1 = require('angular2/bootstrap');
var providers_1 = require('./providers');
function bootstrap(appComponentType, providers) {
    if (providers === void 0) { providers = null; }
    var bootstrapProviders = providers_1.providers;
    if (providers) {
        providers.forEach(function (element) { return bootstrapProviders.push(element); });
    }
    bootstrap_1.bootstrap(appComponentType, providers);
}
exports.bootstrap = bootstrap;
