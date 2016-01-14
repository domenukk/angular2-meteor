/// <reference path="../../../typings/angular2.d.ts" />
'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var PaginationControlsCpm = (function () {
    function PaginationControlsCpm(_service) {
        var _this = this;
        this._service = _service;
        this.change = new core_1.EventEmitter();
        this.pages = [];
        this._page = 1;
        this._id = this._id || this._service.defaultId;
        this._changeSub = this._service.change
            .filter(function (id) { return _this._id === id; })
            .subscribe(function () {
            var instance = _this._service.getInstance(_this._id);
            _this.pages = _this._createPageArray(instance.currentPage, instance.itemsPerPage, instance.totalItems);
            _this._setPage(instance.currentPage);
        });
    }
    PaginationControlsCpm.prototype.ngOnDestroy = function () {
        this._changeSub.unsubscribe();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsCpm.prototype.setPage = function (event, page) {
        event.preventDefault();
        this._service.setCurrentPage(this._id, page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsCpm.prototype.getPage = function () {
        return this._service.getCurrentPage(this._id);
    };
    PaginationControlsCpm.prototype._setPage = function (page) {
        if (this._page !== page) {
            this._page = page;
            this.change.emit({ page: page });
        }
    };
    /**
     * Returns an array of IPage objects to use in the pagination controls.
     */
    PaginationControlsCpm.prototype._createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        if (paginationRange === void 0) { paginationRange = 5; }
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var pages = [];
        var page = 1;
        while (page <= totalPages && page <= paginationRange) {
            var pageNumber = this.calculatePageNumber(page, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (page === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (page === paginationRange - 1 && (isMiddle || isStart));
            var label = pageNumber.toString();
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            page++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsCpm.prototype.calculatePageNumber = function (page, currentPage, paginationRange, totalPages) {
        if (page === paginationRange) {
            return totalPages;
        }
        if (page === 1) {
            return page;
        }
        var halfWay = Math.ceil(paginationRange / 2);
        if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + page;
            }
            if (halfWay < currentPage) {
                return currentPage - halfWay + page;
            }
        }
        return page;
    };
    __decorate([
        core_1.Input()
    ], PaginationControlsCpm.prototype, "_id", void 0);
    __decorate([
        core_1.Output()
    ], PaginationControlsCpm.prototype, "change", void 0);
    PaginationControlsCpm = __decorate([
        core_1.Component({
            selector: 'pagination-controls',
            templateUrl: '/packages/barbatus_ng2-pagination/src/pagination-controls-cmp.html'
        })
    ], PaginationControlsCpm);
    return PaginationControlsCpm;
})();
exports.PaginationControlsCpm = PaginationControlsCpm;
