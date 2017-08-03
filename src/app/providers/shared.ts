import { Injectable, EventEmitter, Output } from '@angular/core';

declare var window:any;

@Injectable()
export class Shared {
    @Output() menu: EventEmitter<any> = new EventEmitter<any>();

    menuVisible:boolean = false;

    toggleMenu(value?){
        if(value){
            this.menuVisible = value;
        } else {
            this.menuVisible != this.menuVisible;
        }
    
        this.menu.emit(this.menuVisible);
    }

    public texts;
}