import { Component, NgZone } from '@angular/core';
import { Shared } from '../../providers/shared';

@Component({
    selector: 'section-projects',
    templateUrl: './projects.html',
    styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
    public showMore: boolean = false;
    public projectsNumber = 8;

    constructor(public portfolio: Shared, public zone: NgZone) {}

    moreProjects() {
        this.zone.run(() => {
            this.showMore = true;
            this.projectsNumber = this.portfolio.texts.projects.projects.length;
            console.log(this.showMore);
        })
    }
}
