import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SportsComponent } from './components/sports/sports.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'sports', component: SportsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routecomponents = [HomepageComponent, SportsComponent]
