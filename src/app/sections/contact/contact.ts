import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Shared } from '../../providers/shared';


@Component({
    selector: 'section-contact',
    templateUrl: './contact.html',
    styleUrls: ['./contact.scss']
})
export class ContactComponent implements AfterViewInit {

    @ViewChild('contact') contactSection: ElementRef;

    constructor(public portfolio:Shared){
        
    }

    ngAfterViewInit(){
        this.portfolio.sections['contact'] = this.contactSection;
    }

}
