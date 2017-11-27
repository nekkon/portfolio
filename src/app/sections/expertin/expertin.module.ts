
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertinComponent } from './expertin';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MasteryModule } from '../../components/index';

@NgModule({
    imports: [ CommonModule, MasteryModule, FlexLayoutModule ],
    declarations: [ ExpertinComponent ],
    exports:      [ ExpertinComponent ]
})

export class ExpertinModule {};