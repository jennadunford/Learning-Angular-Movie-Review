import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieDashComponent } from './movie-dash/movie-dash.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { AppRoutingModule } from './app-routing-module';
import { SiteMessagesComponent } from './site-messages/site-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDashComponent,
    AllReviewsComponent,
    ReviewPageComponent,
    NewReviewComponent,
    SiteMessagesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
