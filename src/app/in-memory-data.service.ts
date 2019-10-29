import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  const allMovies = [
      ];
  return allMovies;
  }
}
