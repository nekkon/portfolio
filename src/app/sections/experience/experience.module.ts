
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceComponent } from './experience';
import { TimelineModule } from '../../components/index';

@NgModule({
    imports: [ CommonModule, TimelineModule ],
    declarations: [ ExperienceComponent ],
    exports:      [ ExperienceComponent ]
})

export class ExperienceModule {};