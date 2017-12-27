import { Injectable, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class Shared {

    constructor(public http:HttpClient){}
    @Output() menu: EventEmitter<any> = new EventEmitter<any>();

    menuVisible:boolean = false;

    toggleMenu(value?){
        if(value || value == false){
            this.menuVisible = value;
        } else {
            this.menuVisible != this.menuVisible;
        }
    
        this.menu.emit(this.menuVisible);
    }

    getTexts(callback){
        let $this = this;
        this.http.get(environment.assets + 'json/texts_en.min.json')
            .subscribe(
                data => { 
                    console.log('Texts Loaded');
                    console.log(data);
                    this.texts = data;
                    if(callback){
                        callback();
                    }
                },
                err => console.error(err)
            );
    };
    

    public texts;
    public sections = {};
}