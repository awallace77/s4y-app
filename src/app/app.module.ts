import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HeaderComponent } from './components/header/header.component';
import { LargeCardComponent } from './large-card/large-card.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SmallCardComponent,
    HeaderComponent,
    LargeCardComponent,
    LandingComponent,
    SearchResultsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'landing', component: LandingComponent},
      {path: 'search-results', component: SearchResultsComponent},
      {path: 'profile', component: ProfileComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
