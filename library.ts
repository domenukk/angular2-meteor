/** This line sets an import that will use
 DDP_DEFAULT_CONNECTION_URL: 'http://localhost:3000'
 no other DDP_DEFAULT_CONNECTION_URL has been set before.
 Then it will export everything Meteor.
 */
const meteorExports = require('imports?' +
  '__meteor_runtime_config__=>{DDP_DEFAULT_CONNECTION_URL: ' +
  '(typeof DDP_DEFAULT_CONNECTION_URL === "undefined")? "http://localhost:3000": DDP_DEFAULT_CONNECTION_URL}' +
  '&module=>{}!'+ // Shim the module so that we don't override our require.
  'exports?' +
  'Package&Meteor&Log&Tracker&DDP&Mongo&check&Match&_&Random&EJSON!' + // Export ALLTHETHINGS Meteor
  'meteor-client-side'); // (This reqire line will only work in webpack)

export const { Meteor, _, DDP, Mongo, Tracker, Match, Random, EJSON } = meteorExports;
export default Meteor;
Meteor._ = Meteor.underscore = _;
require('meteor-htmljs')(Meteor);

if (typeof METEOR_NO_BLAZE === 'undefined') {
  // Load jQuery and Blaze and export it.
  const $ = require('jquery');
  require('meteor-blaze')(Meteor, $);
  export const Blaze = Meteor.Blaze;

  export * from './packages/ng2-accounts-ui/main';
}

// Export accounts-ui (needs Blaze)
export * from './packages/ng2-accounts/main';

const rxjs = require('rxjs');
export * from './packages/ng2-pagination/src/ng2-pagination';

export * from './main'
