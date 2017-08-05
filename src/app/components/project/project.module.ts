
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ ProjectComponent ],
    exports:      [ ProjectComponent ]
})

export class ProjectModule {};