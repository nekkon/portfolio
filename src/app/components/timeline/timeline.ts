import { Component, OnInit, Input} from '@angular/core';
import { Shared } from '../../providers/shared';

@Component({
    selector: 'component-timeline',
    templateUrl: './timeline.html',
    styleUrls: ['./timeline.scss']
})
export class TimelineComponent implements OnInit {
    @Input() job;
    @Input() index;

    constructor(public portfolio:Shared){
        
    }

    ngOnInit(){

    }

    getIcon(icon){
        //this.portfolio.texts.
    }

}
