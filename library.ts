// TODO: Do we need to configure this?
//noinspection TypeScriptUnresolvedVariable
if (typeof __meteor_runtime_config__ === 'undefined') {
  //noinspection TypeScriptUnresolvedVariable
  globals.__meteor_runtime_config__ = {
    DDP_DEFAULT_CONNECTION_URL: 'http://localhost:3000'
  };
}

// Everything we need from Meteor
const modules = [
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
const moduleLinks = modules.map((module) => `${module}=${module}`).join('&');

const meteorExports = require('imports?!' +
  `exports?${moduleLinks}!` +
  'meteor-client-side'); // This will only work in webpack

export const { Meteor, _, DDP, Mongo, Tracker, Match, Random, EJSON } = meteorExports;
export default Meteor;
Meteor._ = Meteor.underscore = _;

require('meteor-htmljs')(Meteor);

//const rxjs = require('rxjs');

export const $ = require('jquery');

require('meteor-blaze')(Meteor, $);
export const Blaze = Meteor.Blaze;

export * from './packages/ng2-accounts/main';
export * from './packages/ng2-accounts-ui/main';
export * from './packages/ng2-pagination/src/ng2-pagination';

export * from './main'
