
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationConferencesComponent } from './educationConferences';
import { ListModule, TitleModule } from '../../components/index';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [ CommonModule, ListModule, FlexLayoutModule, TitleModule ],
    declarations: [ EducationConferencesComponent ],
    exports:      [ EducationConferencesComponent ]
})

export class EducationConferencesModule {};