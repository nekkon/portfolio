import { Component } from '@angular/core';
import { Shared } from "app/providers/shared";

@Component({
    selector: 'section-accomplishments',
    templateUrl: './accomplishments.html',
    styleUrls: ['./accomplishments.scss']
})
export class AccomplishmentsComponent {

    constructor(private portfolio:Shared){

    }
}
