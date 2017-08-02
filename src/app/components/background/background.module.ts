
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundComponent } from './background';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ BackgroundComponent ],
    exports:      [ BackgroundComponent ]
})

export class BackgroundModule {};