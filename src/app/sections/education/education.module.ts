
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationComponent } from './education';
import { ListModule } from "app/components";

@NgModule({
    imports: [ CommonModule, ListModule ],
    declarations: [ EducationComponent ],
    exports:      [ EducationComponent ]
})

export class EducationModule {};