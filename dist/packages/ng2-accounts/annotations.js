/// <reference path="../../typings/angular2.d.ts" />
/// <reference path="../../typings/meteor/meteor.d.ts" />
'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var decorators_1 = require('angular2/src/core/util/decorators');
var router_1 = require('angular2/router');
var InjectUserAnnotation = (function () {
    function InjectUserAnnotation(propName) {
        if (propName === void 0) { propName = 'user'; }
        this.propName = propName;
    }
    return InjectUserAnnotation;
})();
function InjectUser(propName) {
    var annInstance = new InjectUserAnnotation(propName);
    var TypeDecorator = function TypeDecorator(cls) {
        var propName = annInstance.propName;
        var fieldName = "_" + propName;
        var injected = fieldName + "Injected";
        Object.defineProperty(cls.prototype, propName, {
            get: function () {
                var _this = this;
                if (!this[injected]) {
                    this[fieldName] = Meteor.user();
                    if (this.autorun) {
                        Meteor.setTimeout(function () {
                            _this.autorun(function () {
                                _this[fieldName] = Meteor.user();
                            }, true);
                        }, 0);
                    }
                    this[injected] = true;
                }
                return this[fieldName];
            },
            enumerable: true,
            configurable: false
        });
        return cls;
    };
    return TypeDecorator;
}
exports.InjectUser = InjectUser;
;
/**
 * Here CanActivate is an internal class (not present in the typings)
 * defined at angular/modules/angular2/src/router/lifecycle_annotations_impl.ts.
 * Each annotation designed to implement activation logic should extend it.
 */
var RequireUserAnnotation = (function (_super) {
    __extends(RequireUserAnnotation, _super);
    function RequireUserAnnotation() {
        _super.call(this, this.canProceed.bind(this));
    }
    RequireUserAnnotation.prototype.canProceed = function (prev, next) {
        return !!Meteor.user();
    };
    return RequireUserAnnotation;
})(router_1.CanActivate);
exports.RequireUser = decorators_1.makeDecorator(RequireUserAnnotation);
