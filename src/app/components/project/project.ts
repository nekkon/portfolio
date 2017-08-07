import { Component, OnInit} from '@angular/core';
import { Shared } from "app/providers/shared";

@Component({
    selector: 'component-project',
    templateUrl: './project.html',
    styleUrls: ['./project.scss']
})
export class ProjectComponent implements OnInit {

    constructor(public portfolio:Shared){
        
    }

    ngOnInit(){

    }
}
