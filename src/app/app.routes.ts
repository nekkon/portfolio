
import { Route } from '@angular/router';

export const Routing:Route[] = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: './views/home/home.module#HomeModule' }
];