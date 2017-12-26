import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LazyView } from './lazy.view';

import { AboutModule, ContactModule, EducationConferencesModule, ExperienceModule, VideoModule, ProjectsModule, ExpertinModule, AccomplishmentsModule } from '.';



@NgModule({
    imports: [ CommonModule, FlexLayoutModule, FormsModule, 
        AboutModule, ExpertinModule, ContactModule, AccomplishmentsModule, EducationConferencesModule, ExperienceModule, ProjectsModule,
        RouterModule.forChild([
            {
                path: '',
                component: LazyView
            }])
        ],
    declarations: [ LazyView ],
    exports:      [ RouterModule ]
})

export class LazyViewModule {};