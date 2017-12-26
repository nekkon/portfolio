import { Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shared } from './providers/shared';
import { environment } from '../environments/environment';

@Component({
    selector: 'app',
    templateUrl: './app.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class App{
    public loading = true;

    constructor(private http:HttpClient, public portfolio:Shared, public ref: ChangeDetectorRef){
        if(!this.portfolio.texts){
            this.getTexts();
        }
    }
  
    getTexts(){
        let $this = this;
        this.http.get(environment.assets + 'json/texts_en.min.json')
            .subscribe(
                data => { 
                    console.log('Texts Loaded');
                    console.log(data);
                    this.portfolio.texts = data;
                    this.loading = false;
                    this.ref.detectChanges();
                },
                err => console.error(err)
            );
    };
}
