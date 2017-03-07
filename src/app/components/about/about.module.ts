
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { aboutComponent } from './about';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ aboutComponent ],
    exports:      [ aboutComponent ]
})

export class aboutModule {};