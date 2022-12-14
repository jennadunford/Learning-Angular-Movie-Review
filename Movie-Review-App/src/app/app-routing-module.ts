import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDashComponent } from './movie-dash/movie-dash.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { ReviewPageComponent } from './review-page/review-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/movieDash', pathMatch: 'full' },
  { path: 'movieDash', component: MovieDashComponent },
  { path: 'allReviews', component: AllReviewsComponent },
  { path: 'allReviews/:id', component: ReviewPageComponent },
  { path: 'newReview', component: NewReviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
