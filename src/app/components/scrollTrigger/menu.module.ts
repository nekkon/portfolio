
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { menuComponent } from './menu';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ menuComponent ],
    exports:      [ menuComponent ]
})

export class menuModule {};