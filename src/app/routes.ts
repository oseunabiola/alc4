import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DetailsComponent } from './details/details.component';
import { Error404Component } from './errors/404.component';
import { DetailsRouteActivator } from './details/details-route-activator';

export const routes: Routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: 'movies', component: HomeComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: '404', component: Error404Component },
    // { path: 'movies/:id', component: DetailsComponent, canActivate: [DetailsRouteActivator] }
    { path: 'movies/:id', component: DetailsComponent }
];

