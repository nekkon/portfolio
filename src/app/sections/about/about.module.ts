
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about';
import { MdButtonModule } from "@angular/material";

@NgModule({
    imports: [ CommonModule, MdButtonModule ],
    declarations: [ AboutComponent ],
    exports:      [ AboutComponent ]
})

export class AboutModule {};