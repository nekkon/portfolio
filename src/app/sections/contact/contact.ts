import { Component } from '@angular/core';
import { Shared } from "app/providers/shared";


@Component({
    selector: 'section-contact',
    templateUrl: './contact.html',
    styleUrls: ['./contact.scss']
})
export class ContactComponent {

    constructor(public portfolio:Shared){
        
    }

}
