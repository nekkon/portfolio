import { Component } from '@angular/core';
import { Shared } from '../../providers/shared';


@Component({
    selector: 'section-about',
    templateUrl: './about.html',
    styleUrls: ['./about.scss']
})
export class AboutComponent {

    constructor(public portfolio:Shared){
        
    }

}
