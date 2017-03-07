import { Component } from '@angular/core';

import { Globals } from './../../app.globals';

@Component({
    selector: 'contact',
    templateUrl: './contact.html',
    styleUrls: ['./contact.scss']
})
export class contactComponent {

    constructor(private portfolio:Globals){
        
    }

}
