import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {
  
  page = 1;
  pageSize = 20;
  allEntertainmentNews: any[]= [];
  length;
  color = 'primary';
  mode = 'indeterminate';
  pageloader = true;
  mobileSpinner = true;
  showPaginator = false;
  constructor(private service: NewsapiService) { }

  ngOnInit() {
    this.fetchEntertainmentNews(this.page,this.pageSize)
  }

  fetchEntertainmentNews(page, pageSize){
    this.service.getAllEntertainmentNews(page,pageSize).subscribe((res:any)=>{
      if(res.status === 'ok'){
        this.allEntertainmentNews = res.articles;
        this.length = res.totalResults;
        this.pageloader = false;
        this.mobileSpinner = false;
        this.showPaginator = true;
      }
    })
  }
  paginator(event){
    const pageIndex = event.pageIndex+1;
    const pageSize = event.pageSize;
    this.mobileSpinner = true;
    this.service.getAllEntertainmentNews(pageIndex, pageSize).subscribe((res: any)=>{
      this.allEntertainmentNews = res.articles;
      this.mobileSpinner = false;
    })
  }
}
