import { Component, OnInit } from '@angular/core';
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
  pageSize = 10;
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
    // this.fetchAll()
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
        console.log(this.allSportnews)
      }
    })
  }
  selectoption(event){
    this.sortItemsBy = event.target.value;
    console.log(this.sortItemsBy)
  }
  paginator(event){
    console.log(event)
    const pageIndex = event.pageIndex+1;
    const pageSize = event.pageSize;
    console.log(pageIndex)
    this.service.getAllSportsNews(pageIndex, pageSize).subscribe((res: any)=>{
      this.allSportnews = res.articles;
      console.log(this.allSportnews)
    })
  }
}
