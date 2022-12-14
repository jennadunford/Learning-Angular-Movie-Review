import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MOVIES } from '../movie-content';

@Component({
  selector: 'app-movie-dash',
  templateUrl: './movie-dash.component.html',
  styleUrls: ['./movie-dash.component.css'],
})
export class MovieDashComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
