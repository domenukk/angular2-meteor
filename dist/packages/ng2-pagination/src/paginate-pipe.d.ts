/// <reference path="../../../../typings/angular2.d.ts" />
import { PaginationService } from './pagination-service';
export declare class PaginatePipe {
    private service;
    private _pagination;
    constructor(service: PaginationService);
    transform(collection: any, args: any[]): any;
    private _createFromConfig(collection, args);
    private _parseTotalItems(collection, totalItems?);
    private _parseValue(value, dfault?);
}
