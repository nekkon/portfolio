import { Component } from '@angular/core';
import { Shared } from "app/providers/shared";

@Component({
    selector: 'section-experience',
    templateUrl: './experience.html',
    styleUrls: ['./experience.scss']
})
export class ExperienceComponent {

    constructor(private portfolio:Shared){

    }
}
