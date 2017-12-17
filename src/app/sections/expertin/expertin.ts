import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Shared } from '../../providers/shared';

@Component({
    selector: 'section-expertin',
    templateUrl: './expertin.html',
    styleUrls: ['./expertin.scss']
})
export class ExpertinComponent implements AfterViewInit {

    @ViewChild('expertin') expertinSection: ElementRef;

    constructor(public portfolio:Shared){

    }

    ngAfterViewInit(){
        this.portfolio.sections['expertin'] = this.expertinSection;
    }
}
