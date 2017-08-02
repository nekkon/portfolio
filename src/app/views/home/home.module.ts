
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { scrollTrigger } from './../../services/scrollTrigger';

import { HomeView } from './home';

import { MenuModule , AboutModule , BackgroundModule , ContactModule , EducationModule , ExperienceModule , VideoModule, PortfolioModule } from './../../components';

@NgModule({
    imports: [ CommonModule , 
        MenuModule, AboutModule, BackgroundModule, ContactModule, EducationModule, ExperienceModule, VideoModule, PortfolioModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomeView
            }])
        ],
    declarations: [ HomeView ],
    exports:      [ HomeView ],
    providers: [ scrollTrigger ]
})

export class HomeModule {};


