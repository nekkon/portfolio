import { Component , NgZone } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Globals } from './app.globals';

@Component({
  selector: 'app',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App{

    constructor(private http:Http,private zone:NgZone,private portfolio:Globals){
        this.getTexts();
    }
  
    getTexts(){
          let $this = this;
          this.http.get('/assets/json/texts.json')
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
