import { Component } from '@angular/core';
import { Shared } from "app/providers/shared";

@Component({
    selector: 'menu',
    templateUrl: './menu.html',
    styleUrls: ['./menu.scss']
})
export class MenuComponent {
    public hovered:any;

    constructor(public portfolio:Shared){
        
    }

    onHover(link){
        this.hovered = link;
    }
    onMouseOut(){
        this.hovered = '';
    }

}
