import { Component} from '@angular/core';
import { Shared } from '../providers/shared';

@Component({
    selector: 'lazy-view',
    templateUrl: './lazy.view.html'
})
export class LazyView{

    constructor(public portfolio:Shared){

    }
}
