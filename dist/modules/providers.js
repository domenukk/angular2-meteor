/// <reference path="../typings/angular2-meteor.d.ts" />
'use strict';
var core_1 = require('angular2/core');
var change_detection_1 = require('angular2/src/core/change_detection/change_detection');
var mongo_cursor_differ_1 = require('./mongo_cursor_differ');
/**
 * Gets the provider list that should be passed into angular for bootstrrapping
 * @returns {Array}
 * @private
 */
function _get_provider_list() {
    var providers = [];
    var factories = change_detection_1.defaultIterableDiffers.factories;
    if (factories) {
        factories.push(new mongo_cursor_differ_1.MongoCursorDifferFactory());
    }
    providers.push(core_1.provide(core_1.IterableDiffers, {
        useValue: new core_1.IterableDiffers(factories)
    }));
    return providers;
}
exports.providers = _get_provider_list();
