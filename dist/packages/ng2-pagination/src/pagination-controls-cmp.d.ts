/// <reference path="../../../../typings/angular2.d.ts" />
import { EventEmitter } from 'angular2/core';
import { PaginationService } from "./pagination-service";
export interface IPage {
    label: string;
    value: any;
}
export declare class PaginationControlsCpm {
    private _service;
    private _id;
    change: EventEmitter<number>;
    protected pages: IPage[];
    private _page;
    private _changeSub;
    constructor(_service: PaginationService);
    private ngOnDestroy();
    /**
     * Set the current page number.
     */
    setPage(event: any, page: number): void;
    /**
     * Get the current page number.
     */
    getPage(): number;
    _setPage(page: any): void;
    /**
     * Returns an array of IPage objects to use in the pagination controls.
     */
    private _createPageArray(currentPage, itemsPerPage, totalItems, paginationRange?);
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    private calculatePageNumber(page, currentPage, paginationRange, totalPages);
}
