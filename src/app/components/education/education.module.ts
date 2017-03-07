
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { videoComponent } from './video';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ videoComponent ],
    exports:      [ videoComponent ]
})

export class videoModule {};