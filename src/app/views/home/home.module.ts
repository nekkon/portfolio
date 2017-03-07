
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    exports:      [ homeView ]
})

export class homeModule {};


