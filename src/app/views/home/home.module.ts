
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeView } from './home';

import { AboutModule, ContactModule, EducationConferencesModule, ExperienceModule, VideoModule, PortfolioModule, ExpertinModule, AccomplishmentsModule } from './../../sections';
import { scrollTrigger } from "app/providers/scrollTrigger";
import { MenuModule } from "app/components";

@NgModule({
    imports: [ CommonModule, FlexLayoutModule, FormsModule, 
        MenuModule, AboutModule, ExpertinModule, ContactModule, AccomplishmentsModule, EducationConferencesModule, ExperienceModule, VideoModule, PortfolioModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomeView
            }])
        ],
    declarations: [ HomeView ],
    exports:      [ RouterModule ],
    providers: [ scrollTrigger ]
})

export class HomeModule {};


