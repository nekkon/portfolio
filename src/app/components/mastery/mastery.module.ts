
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasteryComponent } from './mastery';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ MasteryComponent ],
    exports:      [ MasteryComponent ]
})

export class MasteryModule {};