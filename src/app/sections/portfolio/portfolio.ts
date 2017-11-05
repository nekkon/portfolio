import { Component, NgZone } from '@angular/core';
import { Shared } from "app/providers/shared";

@Component({
    selector: 'section-portfolio',
    templateUrl: './portfolio.html',
    styleUrls: ['./portfolio.scss']
})
export class PortfolioComponent {
    public showMore:boolean = false;
    public projectsNumber = 8;
    constructor(public portfolio:Shared,public zone:NgZone){

    }
    moreProjects(){
        this.zone.run(()=>{
            this.showMore = true;
            this.projectsNumber = this.portfolio.texts.portfolio.projects.length;
            console.log(this.showMore);
        })
    }
}
