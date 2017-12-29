import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit} from '@angular/core';
import { Shared } from './providers/shared';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const TEXTS_KEY = makeStateKey('texts');

@Component({
    selector: 'app',
    templateUrl: './app.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class App implements OnInit{

    constructor(public portfolio:Shared, public state:TransferState, public ref: ChangeDetectorRef){
        
    }
    ngOnInit(){
        this.portfolio.texts = this.state.get(TEXTS_KEY, null as any);  
        if(!this.portfolio.texts){
            this.portfolio.getTexts().subscribe(
                data => {
                    console.log(data);
                    this.portfolio.texts = data;
                    this.state.set(TEXTS_KEY, this.portfolio.texts as any);
                    this.ref.detectChanges();
                },
                err => console.error(err)
            );
        }
    }
}
