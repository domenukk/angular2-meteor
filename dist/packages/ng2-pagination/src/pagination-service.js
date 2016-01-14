/// <reference path="../../../typings/angular2.d.ts" />
'use strict';
var core_1 = require('angular2/core');
var DEFAULT_ID = 'ng2_pages';
var PaginationService = (function () {
    function PaginationService() {
        this.change = new core_1.EventEmitter();
        this.instances = {};
    }
    Object.defineProperty(PaginationService.prototype, "defaultId", {
        get: function () { return DEFAULT_ID; },
        enumerable: true,
        configurable: true
    });
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = DEFAULT_ID;
        }
        this._checkNumberArg(instance.itemsPerPage, 'pagination.itemsPerPage', 'register');
        this._checkNumberArg(instance.totalItems, 'pagination.totalItems', 'register');
        this._checkNumberArg(instance.currentPage, 'pagination.currentPage', 'register');
        this.instances[instance.id] = instance;
        this.change.emit(instance.id);
    };
    PaginationService.prototype.update = function (id, _a) {
        var itemsPerPage = _a.itemsPerPage, totalItems = _a.totalItems;
        this._checkPagination(id, 'update');
        this._checkNumberArg(itemsPerPage, 'itemsPerPage', 'update', true);
        this._checkNumberArg(totalItems, 'totalItems', 'update', true);
        var instance = this.instances[id];
        var isModified = false;
        if (instance.itemsPerPage != itemsPerPage) {
            this._setItemsPerPage(id, itemsPerPage);
            isModified = true;
        }
        if (instance.totalItems != totalItems) {
            this._setTotalItems(id, totalItems);
            isModified = true;
        }
        if (isModified) {
            this.change.emit(id);
        }
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    PaginationService.prototype.getItemsPerPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].itemsPerPage;
        }
    };
    PaginationService.prototype.getTotalItems = function (id) {
        if (this.instances[id]) {
            return this.instances[id].totalItems;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            var curPage = instance.currentPage;
            if (page <= maxPage && 1 <= page && curPage !== page) {
                instance.currentPage = page;
                this.change.emit(id);
                return true;
            }
        }
        return false;
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        this._checkPagination(id, 'setItemsPerPage');
        this._checkNumberArg(totalItems, 'totalItems', 'setTotalItems');
        this._setTotalItems(id, totalItems);
        this.change.emit(id);
    };
    PaginationService.prototype._setTotalItems = function (id, totalItems) {
        var instance = this.instances[id];
        var maxPage = Math.ceil(totalItems / instance.itemsPerPage);
        var realCurPage = Math.min(instance.currentPage, maxPage) || 1;
        instance.currentPage = realCurPage;
        instance.totalItems = totalItems;
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        this._checkPagination(id, 'setItemsPerPage');
        this._checkNumberArg(itemsPerPage, 'itemsPerPage', 'setItemsPerPage');
        this._setItemsPerPage(id, itemsPerPage);
        this.change.emit(id);
    };
    PaginationService.prototype._setItemsPerPage = function (id, itemsPerPage) {
        this.instances[id].itemsPerPage = itemsPerPage;
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = DEFAULT_ID; }
        if (this.instances[id]) {
            return _.clone(this.instances[id]);
        }
    };
    PaginationService.prototype._checkPagination = function (id, method) {
        if (!this.instances[id]) {
            throw new Error("PaginationService[" + method + "]:\n        pagination with provided ID " + id + " no found");
        }
    };
    PaginationService.prototype._checkNumberArg = function (value, arg, method, allowUndef) {
        if (allowUndef && !_.isUndefined(value)) {
            return;
        }
        if (!_.isNumber(value) || value < 0) {
            throw new Error("PaginationService[" + method + "]:\n        " + arg + " should be a positive number: " + value);
        }
    };
    return PaginationService;
})();
exports.PaginationService = PaginationService;
