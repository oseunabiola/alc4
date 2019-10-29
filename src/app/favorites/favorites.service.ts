import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const STORAGE_KEY = 'user_favs';

@Injectable()
export class FavoritesService {
    currentFavs: any[] = this.storageService.get(STORAGE_KEY) || [];

    constructor(@Inject(SESSION_STORAGE) private storageService: StorageService) {}
    getFavs() {
        return this.currentFavs;
    }
}
