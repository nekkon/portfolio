import { Component, OnInit, Input } from '@angular/core';
import { Shared } from "app/providers/shared";

@Component({
    selector: 'component-project',
    templateUrl: './project.html',
    styleUrls: ['./project.scss']
})
export class ProjectComponent implements OnInit {
    @Input('project') project;

    constructor(public portfolio:Shared){
        
    }

    ngOnInit(){

    }
}
