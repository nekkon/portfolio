
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu';
import { MatIconModule, MatButtonModule } from "@angular/material";

@NgModule({
    imports: [ CommonModule, MatButtonModule, MatIconModule ],
    declarations: [ MenuComponent ],
    exports:      [ MenuComponent ]
})

export class MenuModule {};