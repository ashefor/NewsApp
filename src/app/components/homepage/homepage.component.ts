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
  pageSize = 10;
  length;
  color = 'primary';
  mode = 'indeterminate';
  pageloader = true;
  align = "end";
  fixedInViewport = true;
  fixedTopGap = 0;
  fixedBottomGap = 0;
  mobileSpinner = true;
  showPaginator = false;

  
  constructor(private service:NewsapiService,) { }

  ngOnInit() {
    this.fetchAllNewsFromNig(this.page, this.pageSize)
  }

  
  fetchAllNewsFromNig(page, pageSize){
    this.service.getTopHeadlinesFromNig(page, pageSize).subscribe((res:any)=>{
      this.nigerianArticles = res.articles;
      this.pageloader = false;
      this.mobileSpinner = false;
      this.showPaginator = true;
        this.length = res.totalResults;
      })
  }
  
  paginator(event){
    const pageIndex = event.pageIndex+1;
    const pageSize = event.pageSize;
    this.mobileSpinner = true;
    this.service.getTopHeadlinesFromNig(pageIndex, pageSize).subscribe((res: any)=>{
      this.nigerianArticles = res.articles;
      this.mobileSpinner = false;
    })
  }
}
