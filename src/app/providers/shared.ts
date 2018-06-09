import { Injectable, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class Shared {

    constructor(public http: HttpClient) { }
    @Output() menu: EventEmitter<any> = new EventEmitter<any>();

    menuVisible: boolean = false;

    toggleMenu(value?) {
        if (value || value == false) {
            this.menuVisible = value;
        } else {
            this.menuVisible != this.menuVisible;
        }

        this.menu.emit(this.menuVisible);
    }

    getTexts() {
        return this.http.get(environment.assets + 'json/texts_en.min.json');
    };


    public texts;
    public loading = false;
    public sections = {};
}