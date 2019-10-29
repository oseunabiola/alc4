import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MovieService } from '../movie.service';

@Injectable()
// export class DetailsRouteActivator implements CanActivate {
    export class DetailsRouteActivator {
    constructor(private movieService: MovieService, private router: Router) {}
    // canActivate(route: ActivatedRouteSnapshot) {
    //     const movieExists = !!this.movieService.getMovie(route.params['id']);
        // const movieExists = '';
        // console.log(movieExists);
    //     if (!movieExists) {
    //         this.router.navigate(['/404']);
    //         console.log(this.router.navigate);
    //     } else {
    //         return movieExists;
    //     }
}
