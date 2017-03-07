
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { educationComponent } from './education';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ educationComponent ],
    exports:      [ educationComponent ]
})

export class educationModule {};