import { Component, NgZone, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Shared } from '../../providers/shared';

@Component({
    selector: 'section-projects',
    templateUrl: './projects.html',
    styleUrls: ['./projects.scss']
})
export class ProjectsComponent implements AfterViewInit {
    public showMore: boolean = false;
    public projectsNumber = 8;

    @ViewChild('projects') projectsSection: ElementRef;

    constructor(public portfolio: Shared, public zone: NgZone) {

    }
    moreProjects() {
        this.zone.run(() => {
            this.showMore = true;
            this.projectsNumber = this.portfolio.texts.projects.projects.length;
            console.log(this.showMore);
        })
    }
    ngAfterViewInit() {
        this.portfolio.sections['projects'] = this.projectsSection;
    }
}
