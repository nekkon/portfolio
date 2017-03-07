
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { contactComponent } from './contact';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ contactComponent ],
    exports:      [ contactComponent ]
})

export class contactModule {};