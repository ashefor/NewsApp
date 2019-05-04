import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  private allnews =[];
  private nigerianArticles = [];
  
  constructor(private service:NewsapiService,) { }

  ngOnInit() {
    this.fetchNews();
    this.fetchAllNewsFromNig()
  }

  fetchNews(){
    this.service.getAllnews().subscribe((res: any)=>{
      this.allnews = res.sources;
      console.log(this.allnews)
      console.log(res.status)
    })
  }
  fetchAllNewsFromNig(){
    this.service.getTopHeadlinesFromNig().subscribe((res:any)=>{
      this.nigerianArticles = res.articles;
        console.log(this.nigerianArticles)
      })
  }
  goToFirstPage(){
    console.log('preparing to move')
    this.service.returnFirstPage()
  }
  goToSecondPage(){
    console.log('preparing to move')
    this.service.returnSecondPage()
  }
  // onScroll()  
  // {  
  //   console.log("Scrolled");  
  //   this.page = this.page + 1;  
  //   this.fetchAllNewsFromNig();  
  // }
}
