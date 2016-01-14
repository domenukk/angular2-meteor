/// <reference path="../typings/angular2-meteor.d.ts" />
/// <reference path="../typings/underscore/underscore.d.ts" />
'use strict';
var core_1 = require('angular2/core');
var subscribeEvents = ['onReady', 'onError', 'onStop'];
function isMeteorCallbacks(callbacks) {
    return _.isFunction(callbacks) || isCallbacksObject(callbacks);
}
// Checks if callbacks of {@link CallbacksObject} type.
function isCallbacksObject(callbacks) {
    return callbacks && subscribeEvents.some(function (event) {
        return _.isFunction(callbacks[event]);
    });
}
;
var MeteorComponent = (function () {
    /**
     * @param {NgZone} ngZone added for test purposes mostly.
     */
    function MeteorComponent(ngZone) {
        this._hAutoruns = [];
        this._hSubscribes = [];
        this._zone = ngZone || core_1.createNgZone();
    }
    MeteorComponent.prototype.autorun = function (func, autoBind) {
        check(func, Function);
        var hAutorun = Tracker.autorun(autoBind ? this._bindToNgZone(func) : func);
        this._hAutoruns.push(hAutorun);
        return hAutorun;
    };
    /**
     *  Method has the same notation as Meteor.subscribe:
     *    subscribe(name, [args1, args2], [callbacks], [autobind])
     *  except one additional last parameter,
     *  which binds [callbacks] to the ng2 zone.
     */
    MeteorComponent.prototype.subscribe = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var subArgs = this._prepMeteorArgs(args.slice());
        var hSubscribe = Meteor.subscribe.apply(Meteor, [name].concat(subArgs));
        this._hSubscribes.push(hSubscribe);
        return hSubscribe;
    };
    MeteorComponent.prototype.call = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var callArgs = this._prepMeteorArgs(args.slice());
        return Meteor.call.apply(Meteor, [name].concat(callArgs));
    };
    MeteorComponent.prototype._prepMeteorArgs = function (args) {
        var lastParam = args[args.length - 1];
        var penultParam = args[args.length - 2];
        if (_.isBoolean(lastParam) && isMeteorCallbacks(penultParam)) {
            var callbacks = penultParam;
            var autobind = lastParam;
            if (autobind) {
                args[args.length - 2] = this._bindToNgZone(callbacks);
            }
            // Removes last params since its specific to MeteorComponent.
            args.pop();
        }
        return args;
    };
    MeteorComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._hAutoruns; _i < _a.length; _i++) {
            var hAutorun = _a[_i];
            hAutorun.stop();
        }
        for (var _b = 0, _c = this._hSubscribes; _b < _c.length; _b++) {
            var hSubscribe = _c[_b];
            hSubscribe.stop();
        }
        this._hAutoruns = null;
        this._hSubscribes = null;
    };
    MeteorComponent.prototype._bindToNgZone = function (callbacks) {
        var _this = this;
        if (_.isFunction(callbacks)) {
            return function () { return _this._zone.run(callbacks); };
        }
        if (isCallbacksObject(callbacks)) {
            // Bind zone for each event.
            var newCallbacks = _.clone(callbacks);
            subscribeEvents.forEach(function (event) {
                if (newCallbacks[event]) {
                    newCallbacks[event] = function () { return _this._zone.run(callbacks[event]); };
                }
            });
            return newCallbacks;
        }
        return callbacks;
    };
    return MeteorComponent;
})();
exports.MeteorComponent = MeteorComponent;
