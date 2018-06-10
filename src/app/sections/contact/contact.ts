import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Shared } from '../../providers/shared';

@Component({
    selector: 'section-contact',
    templateUrl: './contact.html',
    styleUrls: ['./contact.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ContactComponent{
    contactForm: FormGroup;

    constructor(public portfolio: Shared, private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            name: ['', Validators.required ],
            email: ['', Validators.required ],
            message: ['', Validators.required ]
        });
    }

    send() {
        if(this.contactForm.valid){
            const data = {
                name: this.contactForm.controls['name'].value,
                email: this.contactForm.controls['email'].value,
                message: this.contactForm.controls['message'].value
            }
            this.portfolio.http.post('/contact', data).subscribe((res) => {
                console.log(res);
            });
        }
    }
}
