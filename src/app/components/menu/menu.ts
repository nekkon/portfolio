import { Component } from '@angular/core';

import { Globals } from './../../app.globals';

@Component({
    selector: 'menu',
    templateUrl: './menu.html',
    styleUrls: ['./menu.scss']
})
export class MenuComponent {
    public hovered:any;

    constructor(public portfolio:Globals){
        
    }

    onHover(link){
        this.hovered = link;
    }
    onMouseOut(){
        this.hovered = '';
    }

}
