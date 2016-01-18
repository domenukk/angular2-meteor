/// <reference path="../typings/angular2-meteor.d.ts" />
'use strict';
var CursorHandle = (function () {
    function CursorHandle(cursor, hCurObserver, hAutoNotify) {
        check(cursor, Mongo.Cursor);
        check(hAutoNotify, Match.Optional(Tracker.Computation));
        check(hCurObserver, Match.Where(function (observer) {
            return !!observer.stop;
        }));
        this._cursor = cursor;
        this._hAutoNotify = hAutoNotify;
        this._hCurObserver = hCurObserver;
    }
    CursorHandle.prototype.stop = function () {
        if (this._hAutoNotify) {
            this._hAutoNotify.stop();
        }
        this._hCurObserver.stop();
    };
    return CursorHandle;
})();
exports.CursorHandle = CursorHandle;
