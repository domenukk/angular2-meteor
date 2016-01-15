/// <reference path="../typings/angular2-meteor.d.ts" />
'use strict';
var bootstrap_1 = require('angular2/bootstrap');
var meteor_providers_1 = require('./meteor_providers');
function bootstrap(appComponentType, providers) {
    if (providers === void 0) { providers = null; }
    var bootstrapProviders = meteor_providers_1.MeteorProviders;
    if (providers) {
        providers.forEach(function (element) { return bootstrapProviders.push(element); });
    }
    bootstrap_1.bootstrap(appComponentType, providers);
}
exports.bootstrap = bootstrap;
