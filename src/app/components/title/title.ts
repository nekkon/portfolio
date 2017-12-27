import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input} from '@angular/core';

@Component({
    selector: 'component-title',
    templateUrl: './title.html',
    styleUrls: ['./title.scss'],
    animations: [
        trigger('lineAnimation', [
            transition(':leave', [
                animate(1000, style({ opacity: 0 }))
            ])
        ])
    ]
})
export class TitleComponent{
    @Input() title = '';
    @Input() lineWidth = 0;
}
