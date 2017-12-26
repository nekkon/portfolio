
import { Route } from '@angular/router';

export const Routing:Route[] = [
    { path: '', loadChildren: './sections/lazy.view.module#LazyViewModule' }
];