
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceComponent } from './experience';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ ExperienceComponent ],
    exports:      [ ExperienceComponent ]
})

export class ExperienceModule {};