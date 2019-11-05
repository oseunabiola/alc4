import { Component, OnInit, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { DetailedMovie } from '../movies';

const STORAGE_KEY = 'user_favs';

@Component ({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit {
    allFavs: any[] = [];
    currentFavs: DetailedMovie[] = this.storageService.get(STORAGE_KEY) || [];
    constructor(@Inject(SESSION_STORAGE) private storageService: StorageService) {}

    ngOnInit() {
        this.allFavs = this.currentFavs;
        console.log(this.allFavs);
    }
}
