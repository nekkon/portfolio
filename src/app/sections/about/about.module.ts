import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about';
import { TitleModule } from '../../components';
import { MatButtonModule } from "@angular/material";
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [ CommonModule, MatButtonModule, FlexLayoutModule, TitleModule ],
    declarations: [ AboutComponent ],
    exports:      [ AboutComponent ]
})

export class AboutModule {};