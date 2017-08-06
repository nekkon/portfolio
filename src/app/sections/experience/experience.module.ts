
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceComponent } from './experience';
import { ProjectModule } from "app/components";

@NgModule({
    imports: [ CommonModule, ProjectModule ],
    declarations: [ ExperienceComponent ],
    exports:      [ ExperienceComponent ]
})

export class ExperienceModule {};