
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about';
import { MatButtonModule } from "@angular/material";

@NgModule({
    imports: [ CommonModule, MatButtonModule ],
    declarations: [ AboutComponent ],
    exports:      [ AboutComponent ]
})

export class AboutModule {};