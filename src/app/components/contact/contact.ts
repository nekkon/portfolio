import { Component } from '@angular/core';
import { Shared } from "app/providers/shared";


@Component({
    selector: 'contact',
    templateUrl: './contact.html',
    styleUrls: ['./contact.scss']
})
export class ContactComponent {

    constructor(private portfolio:Shared){
        
    }

}
