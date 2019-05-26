
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ProjectModule, TitleModule } from '../../components/index';
import { ProjectsComponent } from './projects';

@NgModule({
    imports: [ CommonModule, ProjectModule, FlexLayoutModule, MatButtonModule, TitleModule ],
    declarations: [ ProjectsComponent ],
    exports:      [ ProjectsComponent ]
})

export class ProjectsModule {};