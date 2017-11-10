import { Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'component-timeline',
    templateUrl: './timeline.html',
    styleUrls: ['./timeline.scss']
})
export class TimelineComponent implements OnInit {
    @Input() job;

    constructor(){
        
    }

    ngOnInit(){

    }

}
