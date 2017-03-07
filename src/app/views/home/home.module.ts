
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { scrollTrigger } from './../../services/scrollTrigger';

import { homeView } from './home';

import { menuModule , aboutModule , backgroundModule , contactModule , educationModule , experienceModule , videoModule } from './../../components';

@NgModule({
    imports: [ CommonModule , 
        menuModule , aboutModule , backgroundModule , contactModule , educationModule , experienceModule , videoModule,
        RouterModule.forChild([
            {
                path: '',
                component: homeView
            }])
        ],
    declarations: [ homeView ],
    exports:      [ homeView ],
    providers: [ scrollTrigger ]
})

export class homeModule {};


