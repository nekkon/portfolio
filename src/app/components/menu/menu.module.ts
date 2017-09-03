
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu';
import { MdIconModule, MdButtonModule } from "@angular/material";

@NgModule({
    imports: [ CommonModule, MdButtonModule, MdIconModule ],
    declarations: [ MenuComponent ],
    exports:      [ MenuComponent ]
})

export class MenuModule {};