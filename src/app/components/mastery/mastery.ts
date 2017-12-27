import { Component, Input} from '@angular/core';

@Component({
    selector: 'component-mastery',
    templateUrl: './mastery.html',
    styleUrls: ['./mastery.scss']
})
export class MasteryComponent{
    @Input() item;
}
