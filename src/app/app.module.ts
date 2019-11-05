import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
import { StorageServiceModule } from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer-component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DetailsComponent } from './details/details.component';
import { routes } from './routes';
import { MovieService } from './movie.service';
import { Error404Component } from './errors/404.component';
import { DetailsRouteActivator } from './details/details-route-activator';
import { FavoritesService } from './favorites/favorites.service';



@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    Ng2SearchPipeModule,
    StorageServiceModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    FavoritesComponent,
    DetailsComponent,
    Error404Component
  ],
  providers: [
    MovieService,
    DetailsRouteActivator,
    FavoritesService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
