import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { FavoritesService } from './favorites.service';


@Component ({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit {
    allFavs: any[] = [];
    allMovies;
    constructor(
        private favoritesService: FavoritesService, @Inject(SESSION_STORAGE) private storageService: StorageService
    ) {}

    ngOnInit() {
        this.allFavs = this.favoritesService.getFavs();
    }
}
