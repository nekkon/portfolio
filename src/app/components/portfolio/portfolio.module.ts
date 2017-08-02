
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioComponent } from './portfolio';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ PortfolioComponent ],
    exports:      [ PortfolioComponent ]
})

export class PortfolioModule {};