import { Component } from '@angular/core';

@Component({
    selector: 'menu',
    templateUrl: './menu.html',
    styleUrls: ['./menu.scss']
})
export class menuComponent {
    private menuItems:any;
    private hovered:any;

    constructor(){
        this.menuItems = [
            {
                name: 'About me',
                link: 'about'
            },
            {
                name: 'Education',
                link: 'education'
            },
            {
                name: 'Portfolio',
                link: 'portfolio'
            },
            {
                name: 'Experience',
                link: 'experience'
            },
            {
                name: 'Contact me',
                link: 'contact'
            }
        ]
    }

    onHover(link){
        this.hovered = link;
    }
    onMouseOut(){
        this.hovered = '';
    }

}
