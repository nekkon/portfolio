
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact';
import { MatInputModule, MatButtonModule } from "@angular/material";
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    RECAPTCHA_SETTINGS,
    RecaptchaSettings,
    RecaptchaLoaderService,
    RecaptchaModule
} from 'ng-recaptcha';

const globalSettings: RecaptchaSettings = { siteKey: '6LcGPl4UAAAAAHq1F0ZlJA46PRWgvOBmigAoQ1eI' };

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        RecaptchaModule.forRoot(),
        FlexLayoutModule
    ],
    declarations: [ContactComponent],
    providers: [
        {
            provide: RECAPTCHA_SETTINGS,
            useValue: globalSettings,
        }
    ],
    exports: [ContactComponent]
})

export class ContactModule { };