import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Shared } from '../../providers/shared';


@Component({
    selector: 'section-contact',
    templateUrl: './contact.html',
    styleUrls: ['./contact.scss']
})
export class ContactComponent implements AfterViewInit {
    public message = {
        name : "",
        email : "",
        message : ""
    };

    @ViewChild('contact') contactSection: ElementRef;

    constructor(public portfolio:Shared){
        
    }

    ngAfterViewInit(){
        this.portfolio.sections['contact'] = this.contactSection;
    }

    send(){
        console.log(this.message);
        this.portfolio.http.post('/contact',this.message).subscribe((res)=>{
            console.log(res);
        })
    }

}
