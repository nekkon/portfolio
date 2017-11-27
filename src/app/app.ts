import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Shared } from './providers/shared';


@Component({
    selector: 'app',
    templateUrl: './app.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class App{

    constructor(private http:Http, private zone:NgZone, private portfolio:Shared){
        this.getTexts();
    }
  
    getTexts(){
          let $this = this;
          this.http.get('http://localhost:4000' + '/assets/json/texts_en.json')
              .map((res:Response) => res.json())
              .subscribe(
                  data => { 
                      console.log('Countries Loaded');
                      console.log(data);
                      $this.zone.run(()=>{
                          $this.portfolio.texts = data;
                      })
                  },
                  err => console.error(err)
              );
      };

}
