import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetailedMovie, Movie } from './movies';
// import { map } from 'rxjs/operators';
// import { Movie, DetailedMovie } from './movies';

@Injectable()
export class MovieService {
  api_key = '022d8d27ca4b90b4eeb5c27f9d2d5d01';
  // allMoviesUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=939fbadf&page=1';
  allMoviesUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.api_key}&language=en-US&page=1`;
    constructor(private http: HttpClient) {}

    getMovies(): Observable<Movie> {
      return this.http.get<Movie>(this.allMoviesUrl);
    }

    getMovie(id: number): Observable<DetailedMovie> {
      const aMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.api_key}&language=en-US&append_to_response=credits`;
      return this.http.get<DetailedMovie>(aMovie);
    }
}
