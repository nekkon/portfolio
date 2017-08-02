
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu';
import { MdIconModule } from "@angular/material";

@NgModule({
    imports: [ CommonModule, MdIconModule ],
    declarations: [ MenuComponent ],
    exports:      [ MenuComponent ]
})

export class MenuModule {};