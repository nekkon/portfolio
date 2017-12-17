import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Shared } from '../../providers/shared';


@Component({
    selector: 'section-accomplishments',
    templateUrl: './accomplishments.html',
    styleUrls: ['./accomplishments.scss']
})
export class AccomplishmentsComponent implements AfterViewInit {

    @ViewChild('accomplishments') accomplishmentsSection: ElementRef;

    constructor(public portfolio:Shared){

    }

    ngAfterViewInit(){
        this.portfolio.sections['accomplishments'] = this.accomplishmentsSection;
    }
}
