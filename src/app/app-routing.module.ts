import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SportsComponent } from './components/sports/sports.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { TechnologyComponent } from './components/technology/technology.component';

const routes: Routes = [
  {path: 'home', component: LandingpageComponent},
  {path: 'sports', component: SportsComponent},
  {path: 'ng-news', component: HomepageComponent},
  {path: 'entertainment', component: EntertainmentComponent},
  {path: 'technology', component:TechnologyComponent},
  {path: 'search', component:MainpageComponent, pathMatch: 'prefix' },
  {path: '', component: LandingpageComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routecomponents = [
  HomepageComponent, 
  SportsComponent, 
  MainpageComponent, 
  PagenotfoundComponent, 
  LandingpageComponent, 
  EntertainmentComponent,
  TechnologyComponent
]
