import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  page = 1;
  pageSize = 20;
  allTechNews: any[]= [];
  length;
  color = 'primary';
  mode = 'indeterminate';
  pageloader = true;
  mobileSpinner = true;
  showPaginator = false;
  fixedInViewport = true;
  fixedTopGap = 0;
  fixedBottomGap = 0;

  constructor(private service: NewsapiService) { }

  ngOnInit() {
    this.fetchAllTechNews(this.page, this.pageSize)
  }

  fetchAllTechNews(page, pageSize){
    this.service.getAllTechNews(page,pageSize).subscribe((res:any)=>{
      console.log(res)
      if(res.status === 'ok'){
        this.allTechNews = res.articles;
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
    this.service.getAllTechNews(pageIndex, pageSize).subscribe((res: any)=>{
      this.allTechNews = res.articles;
      this.mobileSpinner = false;
    })
  }
}
