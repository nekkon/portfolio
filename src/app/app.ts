import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit} from '@angular/core';
import { Shared } from './providers/shared';

@Component({
    selector: 'app',
    templateUrl: './app.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class App implements OnInit{

    constructor(public portfolio:Shared, public ref: ChangeDetectorRef){
        
    }
    ngOnInit(){
        if(!this.portfolio.texts){
            this.portfolio.getTexts().subscribe(
                data => {
                    console.log(data);
                    this.portfolio.texts = data;
                    this.ref.detectChanges();
                },
                err => console.error(err)
            );
        }
    }
}
