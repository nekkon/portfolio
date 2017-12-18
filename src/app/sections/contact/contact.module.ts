
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact';
import { MatInputModule, MatButtonModule } from "@angular/material";
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [ CommonModule, MatInputModule, MatButtonModule, FlexLayoutModule ],
    declarations: [ ContactComponent ],
    exports:      [ ContactComponent ]
})

export class ContactModule {};