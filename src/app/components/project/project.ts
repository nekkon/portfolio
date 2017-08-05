import { Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'component-project',
    templateUrl: './project.html',
    styleUrls: ['./project.scss']
})
export class ProjectComponent implements OnInit {
    @Input() label;
    @Input() img;
    @Input() type;

    constructor(){
        
    }

    ngOnInit(){

    }
}
