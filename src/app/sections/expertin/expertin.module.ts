
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertinComponent } from './expertin';
import { MasteryModule } from "app/components";

@NgModule({
    imports: [ CommonModule, MasteryModule ],
    declarations: [ ExpertinComponent ],
    exports:      [ ExpertinComponent ]
})

export class ExpertinModule {};