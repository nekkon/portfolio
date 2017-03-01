
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { backgroundComponent } from './background';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ backgroundComponent ],
    exports:      [ backgroundComponent ]
})

export class backgroundModule {};