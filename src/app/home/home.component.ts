import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allMovies: any;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getAllMovies();
  }
  getAllMovies() {
    return this.movieService.getMovies().subscribe(response => this.allMovies = response);
  }
}
