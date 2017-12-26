
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccomplishmentsComponent } from './accomplishments';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [ CommonModule, FlexLayoutModule ],
    declarations: [ AccomplishmentsComponent ],
    exports:      [ AccomplishmentsComponent ]
})

export class AccomplishmentsModule {};