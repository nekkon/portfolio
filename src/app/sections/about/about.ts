import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Shared } from '../../providers/shared';


@Component({
    selector: 'section-about',
    templateUrl: './about.html',
    styleUrls: ['./about.scss']
})
export class AboutComponent implements AfterViewInit {

    @ViewChild('about') aboutSection: ElementRef;

    constructor(public portfolio:Shared){
        
    }

    ngAfterViewInit(){
        this.portfolio.sections['about'] = this.aboutSection;
    }

}
