
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { toolbarComponent } from './toolbar';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ toolbarComponent ],
    exports:      [ toolbarComponent ]
})

export class toolbarModule {};