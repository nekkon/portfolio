import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Shared } from '../../providers/shared';

@Component({
    selector: 'section-contact',
    templateUrl: './contact.html',
    styleUrls: ['./contact.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ContactComponent{

    public message = {
        name: "",
        email: "",
        message: ""
    };

    constructor(public portfolio: Shared) {}

    send() {

        console.log(this.message);
        this.portfolio.http.post('/contact', this.message).subscribe((res) => {
            console.log(res);
        })
    }
}
