/// <reference path="../../../typings/angular2.d.ts" />
'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        var pagination = this._createFromConfig(collection, args);
        if (!this._pagination) {
            this._pagination = pagination;
            this.service.register(this._pagination);
        }
        else {
            /**
             * Update itemsPerPage and/or totalItems.
             * currentPage is not allowed to be changed in the config,
             * it can be set only via service API itself.
             */
            var itemsPerPage = pagination.itemsPerPage;
            var totalItems = pagination.totalItems;
            this.service.update(this._pagination.id, { itemsPerPage: itemsPerPage, totalItems: totalItems });
        }
        if (collection instanceof Array) {
            var itemsPerPage = this.service.getItemsPerPage(this._pagination.id);
            var start = (this.service.getCurrentPage(this._pagination.id) - 1) * itemsPerPage;
            var end = start + itemsPerPage;
            return collection.slice(start, end);
        }
        return collection;
    };
    PaginatePipe.prototype._createFromConfig = function (collection, args) {
        var instance;
        var config = args[0];
        if (_.isString(config) || _.isNumber(config)) {
            instance = {
                id: this.service.defaultId,
                itemsPerPage: this._parseValue(config, 1),
                currentPage: 1,
                totalItems: this._parseTotalItems(collection)
            };
        }
        if (_.isObject(config)) {
            instance = {
                id: config.id || this.service.defaultId,
                itemsPerPage: this._parseValue(config.itemsPerPage, 10),
                currentPage: this._parseValue(config.currentPage, 1),
                totalItems: this._parseTotalItems(collection, config.totalItems)
            };
        }
        if (!instance) {
            throw new Error("PaginatePipe: Argument must be a string,\n        number or an object. Got " + typeof args[0]);
        }
        return instance;
    };
    PaginatePipe.prototype._parseTotalItems = function (collection, totalItems) {
        if (!_.isUndefined(totalItems)) {
            return this._parseValue(totalItems);
        }
        if (collection instanceof Array) {
            return collection.length;
        }
        return undefined;
    };
    PaginatePipe.prototype._parseValue = function (value, dfault) {
        if (!_.isUndefined(value)) {
            var parsed = parseInt(value);
            if (_.isNumber(parsed)) {
                return parsed;
            }
        }
        return dfault;
    };
    PaginatePipe = __decorate([
        core_1.Pipe({
            name: 'paginate',
            pure: false
        })
    ], PaginatePipe);
    return PaginatePipe;
})();
exports.PaginatePipe = PaginatePipe;
