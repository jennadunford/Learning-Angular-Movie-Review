import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieDashComponent } from './movie-dash/movie-dash.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { AppRoutingModule } from './app-routing-module';
import { SiteMessagesComponent } from './site-messages/site-messages.component';

import { MovieService } from './movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieDashComponent,
    AllReviewsComponent,
    ReviewPageComponent,
    NewReviewComponent,
    SiteMessagesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
