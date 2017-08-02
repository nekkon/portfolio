
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeView } from './home';
import { MdIconModule } from '@angular/material';

import { MenuModule , AboutModule , ContactModule , EducationModule , ExperienceModule , VideoModule, PortfolioModule } from './../../components';
import { scrollTrigger } from "app/providers/scrollTrigger";

@NgModule({
    imports: [ CommonModule, FlexLayoutModule, FormsModule, 
        MenuModule, AboutModule, ContactModule, EducationModule, ExperienceModule, VideoModule, PortfolioModule,
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


