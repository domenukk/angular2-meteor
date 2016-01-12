/// <reference path="../typings/angular2-meteor.d.ts" />

'use strict';
import {Type, Provider} from 'angular2/core';

import { bootstrap as ng2Bootstrap } from 'angular2/bootstrap';

import { providers } from './providers';

export function bootstrap(appComponentType: any,
                          providers: Array<Type | Provider | any[]> = null) {
  ng2Bootstrap(appComponentType, providers);
}
