import { Component } from '@angular/core';
import { Shared } from "app/providers/shared";

@Component({
    selector: 'section-education',
    templateUrl: './education.html',
    styleUrls: ['./education.scss']
})
export class EducationComponent {

    constructor(private portfolio:Shared){

    }
}
