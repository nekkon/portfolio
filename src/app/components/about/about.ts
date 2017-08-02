import { Component } from '@angular/core';

import { Globals } from './../../app.globals';

@Component({
    selector: 'about',
    templateUrl: './about.html',
    styleUrls: ['./about.scss']
})
export class AboutComponent {

    constructor(private portfolio:Globals){
        
    }

}
