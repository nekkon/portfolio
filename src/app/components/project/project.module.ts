
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [ CommonModule, FlexLayoutModule ],
    declarations: [ ProjectComponent ],
    exports:      [ ProjectComponent ]
})

export class ProjectModule {};