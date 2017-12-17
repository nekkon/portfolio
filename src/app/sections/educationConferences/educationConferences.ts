import { Component, ViewChild, ElementRef } from '@angular/core';
import { Shared } from '../../providers/shared';


@Component({
    selector: 'section-education-conferences',
    templateUrl: './educationConferences.html',
    styleUrls: ['./educationConferences.scss']
})
export class EducationConferencesComponent {

    @ViewChild('education') educationSection: ElementRef;
    @ViewChild('conferences') conferencesSection: ElementRef;

    constructor(public portfolio:Shared){

    }

    ngAfterViewInit(){
        this.portfolio.sections['education'] = this.educationSection;
        this.portfolio.sections['conferences'] = this.conferencesSection;
    }
}
