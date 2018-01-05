import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit} from '@angular/core';
import { Shared } from './providers/shared';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app',
    templateUrl: './app.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class App implements OnInit{

    constructor(public portfolio:Shared, public ref: ChangeDetectorRef, public meta: Meta){
        this.meta.addTags([
            {name: 'og:title', content: 'Nekkon | portfolio'},
            {name: 'og:description', content: 'Hello, my name is Nektarios Konstantinidis. I am a Senior Developer ( Web / FE - Angular ) and this is my portfolio page.'},
            {name: 'og:image', content: '/assets/img/social-min.png'},
            {name: 'author', content: 'nekkon'},
            {name: 'keywords', content: 'Angular, Portfolio, nekkon, Nektarios, Konstantinidis'},
            {name: 'description', content: 'Hello, my name is Nektarios Konstantinidis. I am a Senior Developer ( Web / FE - Angular ) and this is my portfolio page.'}
        ]);
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
