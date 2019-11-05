import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { DetailedMovie } from '../movies';
import { ToastrService } from 'ngx-toastr';


const STORAGE_KEY = 'user_favs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public aMovie: any;
  toggleFavIcon = '';
  toggleActionStatus = {
      status: false,
      action: ''
  };
  currentFavs: any[] = this.storageService.get(STORAGE_KEY) || [];
  _isFav: boolean;
   constructor(
  public movieService: MovieService,
  private route: ActivatedRoute,
  private toastr: ToastrService,
  @Inject(SESSION_STORAGE) private storageService: StorageService
  ) { }

  ngOnInit() {
    this.aMovie = this.getMovie(+this.route.snapshot.paramMap.get('id'));
    this.isFav(+this.route.snapshot.paramMap.get('id'));
    console.log('This movie is a fav  ' + this._isFav);
  }
  getMovie(id: number) {
    return this.movieService.getMovie(id).subscribe(response => this.aMovie = response);
  }
  addFav(movie: object) {
    this.storageService.remove(STORAGE_KEY);
    this.currentFavs.push(movie);
    this.storageService.set(STORAGE_KEY, this.currentFavs);
    console.log('added to fav');
    this.toastr.success("Added", "Movie added to fav list");
  }
  removeFav(movieId: number) {
      const favIdIndex = this.storageService.get(STORAGE_KEY).findIndex(e => e.id === movieId);
      this.storageService.remove(STORAGE_KEY);
      this.currentFavs.splice(favIdIndex, 1);
      this.storageService.set(STORAGE_KEY, this.currentFavs);
      console.log('removed from fav');
      this.toastr.success("Removed", "Movie removed from fav list");
  }
  toggleFav(movie: object, movieId: number) {
      if (this.toggleFavIcon === 'add') {
          this.addFav(movie);
          this.toggleActionStatus.status = true;
          this.toggleActionStatus.action = 'Added to fav list';
          this.toggleFavIcon = 'remove';
      } else {
          this.removeFav(movieId);
          this.toggleActionStatus.status = true;
          this.toggleActionStatus.action = 'Removed from fav list';
          this.toggleFavIcon = 'add';
      }
      return this.toggleActionStatus;
  }
  isFav(movieId: number) {
      if (this.currentFavs.findIndex((e) => e.id === movieId) === -1) {
          this._isFav = false;
          this.toggleFavIcon = 'add';
      } else {
          this._isFav = true;
          this.toggleFavIcon = 'remove';
      }
      return this._isFav;
  }
  formatVote(vote: number) {
    return ((vote) * 10) + '%';
  }
}
