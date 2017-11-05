import { Component } from '@angular/core';
import { Shared } from "app/providers/shared";

@Component({
    selector: 'section-education-conferences',
    templateUrl: './educationConferences.html',
    styleUrls: ['./educationConferences.scss']
})
export class EducationConferencesComponent {

    constructor(public portfolio:Shared){

    }
}
