
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationConferencesComponent } from './educationConferences';
import { ListModule } from '../../components/index';

@NgModule({
    imports: [ CommonModule, ListModule ],
    declarations: [ EducationConferencesComponent ],
    exports:      [ EducationConferencesComponent ]
})

export class EducationConferencesModule {};