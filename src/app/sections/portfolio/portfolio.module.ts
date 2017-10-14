
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioComponent } from './portfolio';
import { ProjectModule } from "app/components";
import { MatButtonModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    imports: [ CommonModule, ProjectModule, FlexLayoutModule, MatButtonModule ],
    declarations: [ PortfolioComponent ],
    exports:      [ PortfolioComponent ]
})

export class PortfolioModule {};