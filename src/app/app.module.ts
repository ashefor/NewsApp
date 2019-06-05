import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routecomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatGridListModule, MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NewsapiService } from './services/newsapi.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SportsComponent } from './components/sports/sports.component';
import { PageLoaderService } from './services/page-loader.service';
import { LoaderInterceptor } from './interceptors/pageLoader.interceptor';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { TechnologyComponent } from './components/technology/technology.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    routecomponents,
    SportsComponent,
    MainpageComponent,
    PagenotfoundComponent,
    LandingpageComponent,
    EntertainmentComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCardModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule,
    HttpClientModule,
    MatGridListModule,
    InfiniteScrollModule,
    ScrollingModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  providers: [NewsapiService, PageLoaderService, 
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
