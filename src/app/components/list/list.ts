import { Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'component-list',
    templateUrl: './list.html',
    styleUrls: ['./list.scss']
})
export class ListComponent implements OnInit {
    @Input() item;
    @Input() type;

    constructor(){
        
    }

    ngOnInit(){

    }

}
