/// <reference path="../../typings/angular2.d.ts" />
/// <reference path="../../typings/meteor/meteor.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var AccountsUI = (function () {
    function AccountsUI(elementRef, align) {
        var data = align ? { align: align } : {};
        this._view = Blaze.renderWithData(Template.loginButtons, data, elementRef.nativeElement);
    }
    AccountsUI.prototype.ngOnDestroy = function () {
        Blaze.remove(this._view);
    };
    AccountsUI = __decorate([
        core_1.Component({
            selector: 'accounts-ui'
        }),
        core_1.View({
            template: ''
        }),
        __param(1, core_1.Attribute('align'))
    ], AccountsUI);
    return AccountsUI;
})();
exports.AccountsUI = AccountsUI;
