import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(private http: HttpClient) {}
  getCountries() {
    return this.http.get('https://restcountries.com/v3.1/all');
  }
  getMovieSearch(id: string) {
    return this.http.get(
      'https://imdb-api.com/en/API/SearchMovie/k_cnd1jca8/' + id
    );
  }
}
