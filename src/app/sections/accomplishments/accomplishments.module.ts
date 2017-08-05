
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccomplishmentsComponent } from './accomplishments';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ AccomplishmentsComponent ],
    exports:      [ AccomplishmentsComponent ]
})

export class AccomplishmentsModule {};