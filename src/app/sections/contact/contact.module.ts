
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact';
import { MdInputModule } from "@angular/material";

@NgModule({
    imports: [ CommonModule, MdInputModule ],
    declarations: [ ContactComponent ],
    exports:      [ ContactComponent ]
})

export class ContactModule {};