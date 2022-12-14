import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { AppRoutingModule } from './app-routing-module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Movie-Review-App';

  constructor(private api: MovieService) {}
  movieData: any = null;
  countryData: any = null;
  ngOnInit() {
    this.api.getCountries().subscribe((data) => {
      this.countryData = data;
    });
    this.api.getMovieSearch('Scooby Doo').subscribe((data) => {
      this.movieData = data;
    });
  }
}
