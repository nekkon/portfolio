import { Component } from '@angular/core';
import { Shared } from "app/providers/shared";

@Component({
    selector: 'section-portfolio',
    templateUrl: './portfolio.html',
    styleUrls: ['./portfolio.scss']
})
export class PortfolioComponent {

    constructor(public portfolio:Shared){

    }
}
