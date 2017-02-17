
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { mainView } from './main';

import { menuModule } from './../../components';

@NgModule({
    imports: [ CommonModule , menuModule , RouterModule.forChild([
        {
            path: '',
            component: mainView
        }])
    ],
    declarations: [ mainView ],
    exports:      [ mainView ]
})

export class mainModule {};


