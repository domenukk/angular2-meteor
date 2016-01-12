/// <reference path="../typings/angular2-meteor.d.ts" />

'use strict';

import {provide, IterableDiffers} from 'angular2/core';

import {defaultIterableDiffers} from 'angular2/change_detection';

import {MongoCursorDifferFactory} from './mongo_cursor_differ';

function _get_provider_list() {
    const providers = [];
    const factories = defaultIterableDiffers.factories;
    if (factories) {
        factories.push(new MongoCursorDifferFactory());
    }

    providers.push(provide(IterableDiffers, {
        useValue: new IterableDiffers(factories)
    }));
    return providers;
}

export var providers = _get_provider_list();
