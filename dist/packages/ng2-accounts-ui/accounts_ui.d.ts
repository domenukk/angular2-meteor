/// <reference path="../../../typings/angular2.d.ts" />
/// <reference path="../../../typings/meteor/meteor.d.ts" />
import { OnDestroy, ElementRef } from 'angular2/core';
export declare class AccountsUI implements OnDestroy {
    private _view;
    constructor(elementRef: ElementRef, align: string);
    ngOnDestroy(): void;
}
