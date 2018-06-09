import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Shared } from '../../providers/shared';


@Component({
    selector: 'section-experience',
    templateUrl: './experience.html',
    styleUrls: ['./experience.scss']
})
export class ExperienceComponent implements AfterViewInit {

    @ViewChild('experience') experienceSection: ElementRef;

    constructor(public portfolio: Shared) {

    }

    ngAfterViewInit() {
        this.portfolio.sections['experience'] = this.experienceSection;
    }
}
