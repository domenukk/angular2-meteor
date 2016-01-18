// TODO: Do we need to configure this?
//noinspection TypeScriptUnresolvedVariable
if (typeof __meteor_runtime_config__ === 'undefined') {
  //noinspection TypeScriptUnresolvedVariable
  globals.__meteor_runtime_config__ = {
    DDP_DEFAULT_CONNECTION_URL: 'http://localhost:3000'
  };
}

const meteorExports = require('imports?' +
  '__meteor_runtime_config__=>{DDP_DEFAULT_CONNECTION_URL: "http://localhost:3000"}!' +
  'exports?Package=Package&Meteor=Meteor&Log=Log&Tracker=Tracker&DDP=DDP' +
  '&Mongo=Mongo&check=check&Match=Match&_=_&Random=Random&EJSON=EJSON!' +
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
