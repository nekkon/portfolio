import { Component } from '@angular/core';

import { Globals } from './../../app.globals';

@Component({
    selector: 'menu',
    templateUrl: './menu.html',
    styleUrls: ['./menu.scss']
})
export class menuComponent {
    private menuItems:any;
    private hovered:any;

    constructor(private portfolio:Globals){
        
    }

    onHover(link){
        this.hovered = link;
    }
    onMouseOut(){
        this.hovered = '';
    }

}
