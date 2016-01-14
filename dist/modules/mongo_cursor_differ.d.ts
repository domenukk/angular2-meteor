/// <reference path="../../typings/angular2-meteor.d.ts" />
import { ChangeDetectorRef } from 'angular2/core';
import { DefaultIterableDifferFactory } from 'angular2/core';
import { MongoCursorObserver } from './mongo_cursor_observer';
export interface ObserverFactory {
    create(cursor: Object): Object;
}
export declare class MongoCursorDifferFactory extends DefaultIterableDifferFactory {
    supports(obj: Object): boolean;
    create(cdRef: ChangeDetectorRef): MongoCursorDiffer;
}
export declare class MongoCursorDiffer {
    private _inserted;
    private _removed;
    private _moved;
    private _curObserver;
    private _lastChanges;
    private _listSize;
    private _cursor;
    private _obsFactory;
    private _subscription;
    constructor(cdRef: ChangeDetectorRef, obsFactory: ObserverFactory);
    forEachAddedItem(fn: Function): void;
    forEachMovedItem(fn: Function): void;
    forEachRemovedItem(fn: Function): void;
    diff(cursor: Mongo.Cursor<any>): this;
    onDestroy(): void;
    observer: MongoCursorObserver;
    _destroyObserver(): void;
    _updateLatestValue(changes: any): void;
    _reset(): void;
    _applyCleanup(): void;
    _applyChanges(changes: any): void;
    _createChangeRecord(currentIndex: any, prevIndex: any, item: any): any;
}
