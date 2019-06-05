import { Component, OnInit, isDevMode } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  allnews: any[] =[];
  allSports: any[]= [];
  allSportnews: any[]= [];
  endofpage = false;
  pageloader = true;
  page = 1;
  pageSize = 20;
  length;
  color = 'primary';
  mode = 'indeterminate';
  fixedInViewport = true;
  fixedTopGap = 0;
  fixedBottomGap = 0;
  mobileSpinner = true;
  showPaginator = false;
  whattofind;
  newsearcharray: any[] = [];
  sortItemsBy;
  
  constructor(private service: NewsapiService, private router: Router) { }

  ngOnInit() {
    this.fetchNews()
    this.fetchSports(this.page, this.pageSize)
  }

  fetchNews(){
    this.service.getAllSportsCategorySources().subscribe((res: any)=>{
      this.allnews = res.sources;
    })
  }
  fetchSports(page, pageSize){
    this.service.getAllSportsNews(page, pageSize).subscribe((res:any)=>{
      if(res.status === 'ok'){
        this.allSportnews = res.articles;
        this.length = res.totalResults;
        this.pageloader = false;
        this.mobileSpinner = false;
        this.showPaginator = true;
      }
    })
  }
  selectoption(event){
    this.sortItemsBy = event.target.value;
  }
  paginator(event){
    const pageIndex = event.pageIndex+1;
    const pageSize = event.pageSize;
    this.mobileSpinner = true;
    this.service.getAllSportsNews(pageIndex, pageSize).subscribe((res: any)=>{
      this.allSportnews = res.articles;
      this.mobileSpinner = false;
    })
  }
}
