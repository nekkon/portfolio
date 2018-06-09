import { Component, Input } from '@angular/core';

@Component({
    selector: 'component-timeline',
    templateUrl: './timeline.html',
    styleUrls: ['./timeline.scss']
})
export class TimelineComponent {
    @Input() job;
    @Input() index;
}
