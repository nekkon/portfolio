import { animate, style, transition, trigger, keyframes} from '@angular/animations';
import { Component, Input, OnInit} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Component({
    selector: 'component-title',
    templateUrl: './title.html',
    styleUrls: ['./title.scss'],
    animations: [
        trigger('lineAnimation', [
            transition('* => right', [
                animate('1500ms ease-in-out', keyframes([
                    style({transform: 'scaleX(0.1) translateX(0px)', offset: 0}),
                    style({transform: 'scaleX(1) translateX({{width2}}px)', offset: 0.2}),
                    style({transform: 'scaleX(1) translateX({{width8}}px)', offset: 0.8}),
                    style({transform: 'scaleX(0.1) translateX({{width}}px)', offset: 1.0})
                ]))
            ],{ params: {width:0,width2:0,width8:0}}),
            transition('* => left', [
                animate('1500ms ease-in-out', keyframes([
                    style({transform: 'scaleX(0.1) translateX({{width}}px)', offset: 0}),
                    style({transform: 'scaleX(1) translateX({{width8}}px)', offset: 0.2}),
                    style({transform: 'scaleX(1) translateX({{width2}}px)', offset: 0.8}),
                    style({transform: 'scaleX(0.1) translateX(0px)', offset: 1.0}),
                ]))
            ],{ params: {width:0,width2:0,width8:0}})
        ])
    ]
})
export class TitleComponent implements OnInit{
    @Input() title = '';
    @Input() lineWidth = 0;
    @Input() color = "#abe074";
    @Input() inverse = false;
    public direction = '';
    public data;

    constructor(@Inject(PLATFORM_ID) public platformId: any){}

    onEnd(){
        if(isPlatformBrowser(this.platformId)){
            setTimeout(()=>{
                //console.log(this.data);
                if(this.direction == 'right'){
                    if(this.inverse){
                        this.data = {value: 'right', params: {width:this.lineWidth,width2:Math.round(this.lineWidth * 0.2),width8:Math.round(this.lineWidth * 0.8)}};
                    } else {
                        this.data = {value: 'left', params: {width:this.lineWidth,width2:Math.round(this.lineWidth * 0.2),width8:Math.round(this.lineWidth * 0.8)}};
                    }
                    this.direction = 'left';
                } else{
                    if(this.inverse){
                        this.data = {value: 'left', params: {width:this.lineWidth,width2:Math.round(this.lineWidth * 0.2),width8:Math.round(this.lineWidth * 0.8)}};
                    } else {
                        this.data = {value: 'right', params: {width:this.lineWidth,width2:Math.round(this.lineWidth * 0.2),width8:Math.round(this.lineWidth * 0.8)}};
                    }
                    this.direction = 'right';
                }
            },500);
        }
    }

    ngOnInit(){
        this.data = {value: this.inverse?'right':'left', params: {width:this.lineWidth,width2:Math.round(this.lineWidth * 0.2),width8:Math.round(this.lineWidth * 0.8)}};
    }
}
