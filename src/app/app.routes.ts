
import { Route } from '@angular/router';

export const Routing:Route[] = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', loadChildren: './views/main/main.module#mainModule' }
];