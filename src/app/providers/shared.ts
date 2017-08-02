import { Injectable, EventEmitter, Output } from '@angular/core';

declare var window:any;

@Injectable()
export class Shared {
    @Output() menu: EventEmitter<any> = new EventEmitter<any>();

    showMenu(){
        this.menu.emit(true);
    }
    hideMenu(){
        this.menu.emit(false);
    }

    public texts;
}