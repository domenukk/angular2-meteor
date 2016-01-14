/// <reference path="../../typings/angular2.d.ts" />
/// <reference path="../../typings/meteor/meteor.d.ts" />
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
/// <reference path="../../typings/underscore/underscore.d.ts" />
'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
exports.AuthProvider = {
    FACEBOOK: 'facebook',
    GOOGLE: 'google',
    TWITTER: 'twitter',
    GITHUB: 'github',
    MEETUP: 'meetup',
    WEIBO: 'weibo',
    METEOR: 'meteor'
};
var BasicAccountsService = (function () {
    function BasicAccountsService() {
    }
    BasicAccountsService.prototype.logout = function () {
        // Delayes resolve after logout to make sure Meteor.user() is null.
        return this.runWithPromise(Meteor.logout, true);
    };
    BasicAccountsService.prototype.runWithPromise = function (accountFn, inTimeout) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            accountFn(_this.getResolver(resolve, reject, inTimeout));
        });
    };
    BasicAccountsService.prototype.getResolver = function (resolve, reject, inTimeout) {
        var newResolve = inTimeout ? function () { return setTimeout(function () { return resolve(); }); } : resolve;
        return function (error) {
            if (error)
                reject(error);
            else
                newResolve();
        };
    };
    return BasicAccountsService;
})();
var AccountsService = (function (_super) {
    __extends(AccountsService, _super);
    function AccountsService() {
        _super.call(this);
        if (!Meteor.loginWithPassword) {
            var errorMsg = '[AccountsService]: accounts-password pkg is not installed';
            throw new Error(errorMsg);
        }
    }
    AccountsService.prototype.login = function (usernameOrEmail, password) {
        var accountFn = Meteor.loginWithPassword.bind(null, usernameOrEmail, password);
        return this.runWithPromise(accountFn);
    };
    AccountsService.prototype.register = function (newUser) {
        var accountFn = Accounts.createUser.bind(null, newUser);
        return this.runWithPromise(accountFn);
    };
    AccountsService.prototype.forgotPassword = function (email) {
        var accountFn = Accounts.forgotPassword.bind(null, { email: email });
        return this.runWithPromise(accountFn);
    };
    AccountsService.prototype.resetPassword = function (token, newPassword) {
        var accountFn = Accounts.resetPassword.bind(null, token, newPassword);
        return this.runWithPromise(accountFn);
    };
    AccountsService.prototype.changePassword = function (oldPassword, newPassword) {
        var accountFn = Accounts.changePassword.bind(null, oldPassword, newPassword);
        return this.runWithPromise(accountFn);
    };
    AccountsService.prototype.verifyEmail = function (token) {
        var accountFn = Accounts.verifyEmail.bind(null, token);
        return this.runWithPromise(accountFn);
    };
    AccountsService = __decorate([
        core_1.Injectable()
    ], AccountsService);
    return AccountsService;
})(BasicAccountsService);
exports.AccountsService = AccountsService;
var AccountsSocialService = (function (_super) {
    __extends(AccountsSocialService, _super);
    function AccountsSocialService() {
        _super.apply(this, arguments);
    }
    AccountsSocialService.prototype._getDefaultOptions = function (provider) {
        var loginOptions = ({ loginStyle: 'popup' });
        // Providers below don't support permissions as now.
        if (provider !== exports.AuthProvider.TWITTER &&
            provider !== exports.AuthProvider.WEIBO &&
            provider !== exports.AuthProvider.METEOR) {
            loginOptions.requestPermissions = ['email'];
        }
        return loginOptions;
    };
    AccountsSocialService.prototype.loginWith = function (provider, loginOptions) {
        var options = loginOptions || {};
        _.defaults(options, this._getDefaultOptions(provider));
        var errorMsg = "[AccountsSocialService]: accounts-" + provider + " pkg is not installed";
        var accountFn;
        switch (provider) {
            case exports.AuthProvider.FACEBOOK:
                if (!Meteor.loginWithFacebook) {
                    throw new Error(errorMsg);
                }
                accountFn = Meteor.loginWithFacebook.bind(null, options);
                break;
            case exports.AuthProvider.GOOGLE:
                if (!Meteor.loginWithGoogle) {
                    throw new Error(errorMsg);
                }
                accountFn = Meteor.loginWithGoogle.bind(null, options);
                break;
            case exports.AuthProvider.TWITTER:
                if (!Meteor.loginWithTwitter) {
                    throw new Error(errorMsg);
                }
                accountFn = Meteor.loginWithTwitter.bind(null, options);
                break;
            case exports.AuthProvider.GITHUB:
                if (!Meteor.loginWithGithub) {
                    throw new Error(errorMsg);
                }
                accountFn = Meteor.loginWithGithub.bind(null, options);
                break;
            case exports.AuthProvider.MEETUP:
                if (!Meteor.loginWithMeetup) {
                    throw new Error(errorMsg);
                }
                accountFn = Meteor.loginWithMeetup.bind(null, options);
                break;
            case exports.AuthProvider.WEIBO:
                if (!Meteor.loginWithWeibo) {
                    throw new Error(errorMsg);
                }
                accountFn = Meteor.loginWithWeibo.bind(null, options);
                break;
            case exports.AuthProvider.METEOR:
                if (!Meteor.loginWithMeteorDeveloperAccount) {
                    throw new Error(errorMsg);
                }
                accountFn = Meteor.loginWithMeteorDeveloperAccount.bind(null, options);
                break;
            default:
                throw new Error('Unknown authentication provider');
        }
        return this.runWithPromise(accountFn);
    };
    AccountsSocialService = __decorate([
        core_1.Injectable()
    ], AccountsSocialService);
    return AccountsSocialService;
})(BasicAccountsService);
exports.AccountsSocialService = AccountsSocialService;
