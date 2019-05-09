import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SportsComponent } from './components/sports/sports.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'sports', component: SportsComponent},
  // {path: 'main', component: MainpageComponent},
  {path: 'search', component:MainpageComponent, pathMatch: 'prefix' },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routecomponents = [HomepageComponent, SportsComponent, MainpageComponent, PagenotfoundComponent]
