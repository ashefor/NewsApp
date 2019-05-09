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
  color = 'primary';
  mode = 'indeterminate';
  fixedInViewport = true;
  fixedTopGap = 0;
  fixedBottomGap = 0;
  whattofind;
  newsearcharray: any[] = [];
  sortItemsBy;
  
  constructor(private service: NewsapiService, private router: Router) { }

  ngOnInit() {
    this.fetchNews()
    this.fetchSports()
    // this.fetchAll()
  }

  fetchNews(){
    this.service.getAllSportsCategorySources().subscribe((res: any)=>{
      this.allnews = res.sources;
      // console.log(this.allnews)
      // console.log(res.status)
    })
  }
  fetchSports(page = 1){
    this.service.getAllSportsNews(page).subscribe((res:any)=>{
      if(res.status === 'ok'){
        this.allSportnews = res.articles;
        this.pageloader = false;
        // console.log(res.totalResults)
        // console.log(this.allSportnews.length)
        console.log(this.allSportnews)
      }
    })
  }
  onScrollDown() {
    this.page++;
    // this.getHouses(this.page);
    // this.fetchSports(this.page)
    this.service.getAllSportsNews(this.page).subscribe((res: any)=>{
      if(this.allSportnews.length === 90){
        // alert('End of Page')
        this.endofpage =  true;
      }
      else{
        this.allSportnews = this.allSportnews.concat(res.articles)
        console.log(this.allSportnews)
        console.log(this.allSportnews.length)
      }
    })

    console.log('scrolled')
  }
  // fetchAll(){
  //   this.service.loadEverything(this.whattofind, this.sortItemsBy).subscribe((res:any)=>{
  //     console.log(res)
  //     console.log('everything')
  //   })
  // }
  search(){
    // this.service.loadEverything(this.whattofind, this.sortItemsBy).subscribe((res:any)=>{
    //   this.allSportnews = res.articles
    //   // console.log('everything')
    //   console.log(this.whattofind)
    //   console.log(this.newsearcharray);
    //   this.router.navigate(['/search'], {queryParams: {q: this.whattofind}})
    // })
    this.router.navigate(['/search'], {queryParams: {q: this.whattofind, sortBy: this.sortItemsBy}})
  }
  onKey(event){
    
    this.whattofind = event.target.value;
    // console.log(this.whattofind)
  }
  selectoption(event){
    this.sortItemsBy = event.target.value;
    console.log(this.sortItemsBy)
  }
}
