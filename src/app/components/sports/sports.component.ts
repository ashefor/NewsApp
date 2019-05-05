import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

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

  page = 1;

  constructor(private service: NewsapiService) { }

  ngOnInit() {
    this.fetchNews()
    this.fetchSports()
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
}
