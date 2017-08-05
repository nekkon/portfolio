
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeView } from './home';
import { MdIconModule } from '@angular/material';

import { AboutModule, ContactModule, EducationModule, ExperienceModule, VideoModule, PortfolioModule, ExpertinModule, AccomplishmentsModule } from './../../sections';
import { scrollTrigger } from "app/providers/scrollTrigger";
import { MenuModule } from "app/components";

@NgModule({
    imports: [ CommonModule, FlexLayoutModule, FormsModule, 
        MenuModule, AboutModule, ExpertinModule, ContactModule, AccomplishmentsModule, EducationModule, ExperienceModule, VideoModule, PortfolioModule,
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


