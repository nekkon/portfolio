import { Component } from '@angular/core';
import { Shared } from "app/providers/shared";

@Component({
    selector: 'about',
    templateUrl: './about.html',
    styleUrls: ['./about.scss']
})
export class AboutComponent {

    constructor(private portfolio:Shared){
        
    }

}
