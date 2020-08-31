import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FeaturesComponent } from './components/features/features.component';
import { FirtviewComponent } from './components/firtview/firtview.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { PlacesComponent } from './components/places/places.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'firtview', component: FirtviewComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'places', component: PlacesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
