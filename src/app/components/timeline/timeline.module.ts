
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';

@NgModule({
    imports: [ CommonModule, FlexLayoutModule, MatIconModule ],
    declarations: [ TimelineComponent ],
    exports:      [ TimelineComponent ]
})

export class TimelineModule {};