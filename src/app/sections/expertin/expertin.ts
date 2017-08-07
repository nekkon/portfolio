import { Component } from '@angular/core';
import { Shared } from "app/providers/shared";

@Component({
    selector: 'section-expertin',
    templateUrl: './expertin.html',
    styleUrls: ['./expertin.scss']
})
export class ExpertinComponent {

    constructor(private portfolio:Shared){

    }
}
