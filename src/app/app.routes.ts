
import { Route } from '@angular/router';

export const Routing:Route[] = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: './sections/lazy.view.module#LazyViewModule' }
];