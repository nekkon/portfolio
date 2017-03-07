
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { experienceComponent } from './experience';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ experienceComponent ],
    exports:      [ experienceComponent ]
})

export class experienceModule {};