
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertinComponent } from './expertin';
import { MasteryModule } from "app/components";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    imports: [ CommonModule, MasteryModule, FlexLayoutModule ],
    declarations: [ ExpertinComponent ],
    exports:      [ ExpertinComponent ]
})

export class ExpertinModule {};