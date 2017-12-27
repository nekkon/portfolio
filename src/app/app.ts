import { Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { Shared } from './providers/shared';

@Component({
    selector: 'app',
    templateUrl: './app.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class App{
    public loading = true;

    constructor(public portfolio:Shared, public ref: ChangeDetectorRef){
        if(!this.portfolio.texts){
            this.portfolio.getTexts(()=>{
                this.loading = false;
                this.ref.detectChanges();
            });
        }
    }
}
