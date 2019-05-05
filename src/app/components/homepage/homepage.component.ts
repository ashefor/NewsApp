import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  nigerianArticles: any[] = [];
  page = 1;
  color = 'primary';
  mode = 'indeterminate';
  pageloader = true;
  align = "end"
  
  constructor(private service:NewsapiService,) { }

  ngOnInit() {
    this.fetchAllNewsFromNig()
    this.sample()
  }

  
  fetchAllNewsFromNig(page = 1){
    this.service.getTopHeadlinesFromNig(page).subscribe((res:any)=>{
      this.nigerianArticles = res.articles;
      this.pageloader = false;
        console.log(this.nigerianArticles)
      })
  }
  onScrollDown() {
    this.page++;
    this.service.getTopHeadlinesFromNig(this.page).subscribe((res: any)=>{
      if(this.nigerianArticles.length === 90){
        // do something. I'll come back to it
      }
      else{
        this.nigerianArticles = this.nigerianArticles.concat(res.articles)
        console.log(this.nigerianArticles)
        console.log(this.nigerianArticles.length)
      }
    })
    console.log('scrolled')
  }

  sample(){
    this.service.testapi().subscribe((res: any)=>{
      this.nigerianArticles = res.data
    })
  }
}
