/// <reference path="../typings/angular2-meteor.d.ts" />

'use strict';
import {Type, Provider} from 'angular2/core';

import { bootstrap as ng2Bootstrap } from 'angular2/bootstrap';

import { providers as meteorProviders } from './providers';

export function bootstrap(appComponentType: any,
                          providers: Array<Type | Provider | any[]> = null) {
  const bootstrapProviders = meteorProviders;
  if (providers) {
    providers.forEach((element) => bootstrapProviders.push(element));
  }
  ng2Bootstrap(appComponentType, providers);
}
