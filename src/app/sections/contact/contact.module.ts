
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact';
import { MatInputModule, MatButtonModule } from "@angular/material";

@NgModule({
    imports: [ CommonModule, MatInputModule, MatButtonModule ],
    declarations: [ ContactComponent ],
    exports:      [ ContactComponent ]
})

export class ContactModule {};