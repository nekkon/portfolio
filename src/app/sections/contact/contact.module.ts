
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact';
import { MatInputModule, MatButtonModule } from "@angular/material";
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [ CommonModule, FormsModule, MatInputModule, MatButtonModule, FlexLayoutModule ],
    declarations: [ ContactComponent ],
    exports:      [ ContactComponent ]
})

export class ContactModule {};