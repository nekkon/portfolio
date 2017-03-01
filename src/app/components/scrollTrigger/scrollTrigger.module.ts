
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { scrollTriggerComponent } from './scrollTrigger';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ scrollTriggerComponent ],
    exports:      [ scrollTriggerComponent ]
})

export class scrollTriggerModule {};