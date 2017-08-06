
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioComponent } from './portfolio';
import { ProjectModule } from "app/components";

@NgModule({
    imports: [ CommonModule, ProjectModule ],
    declarations: [ PortfolioComponent ],
    exports:      [ PortfolioComponent ]
})

export class PortfolioModule {};