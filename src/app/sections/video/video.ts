import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Shared } from '../../providers/shared';

@Component({
    selector: 'section-video',
    templateUrl: './video.html',
    styleUrls: ['./video.scss']
})
export class VideoComponent implements AfterViewInit {

    @ViewChild('video') videoSection: ElementRef;

    constructor(public portfolio: Shared) {

    }

    ngAfterViewInit() {
        this.portfolio.sections['video'] = this.videoSection;
    }
}
