import { Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'component-mastery',
    templateUrl: './mastery.html',
    styleUrls: ['./mastery.scss']
})
export class MasteryComponent implements OnInit {
    @Input() label;
    @Input() img;

    constructor(){
        
    }

    ngOnInit(){

    }
}
