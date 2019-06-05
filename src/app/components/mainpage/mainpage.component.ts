import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  q: string;
  sortedBy: string;
  searcharticles: any[]= [];
  page = 1;
  pageSize = 20;
  pageIndex: number;
  length;
  fixedInViewport = true;
  fixedTopGap = 0;
  fixedBottomGap = 0;
  endofpage = false;
  pageloader = true;
  color = 'primary';
  mode = 'indeterminate';
  mobileSpinner =  true;
  showPaginator = false;

  constructor(private route: ActivatedRoute, private service: NewsapiService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      this.q = params.q;
      this.sortedBy = params.sortBy;
    })
    this.service.loadSearchResults(this.q, this.sortedBy, this.pageSize, this.page).subscribe((res:any)=>{
      this.searcharticles = res.articles
      this.pageloader = false;
      this.mobileSpinner = false;
      this.showPaginator = true;
      this.length = res.totalResults;
    })
  }

  paginator(event){
    this.pageIndex = event.pageIndex+1;
    this.pageSize = event.pageSize;
    this.mobileSpinner = true;
    this.service.loadSearchResults(this.q, this.sortedBy, this.pageSize, this.pageIndex).subscribe((res: any)=>{
      this.searcharticles = res.articles;
      this.mobileSpinner = false;
    })
  }
  sortItems(event){
    this.sortedBy = event.target.value;
    this.service.loadSearchResults(this.q, this.sortedBy, this.pageSize, this.pageIndex).subscribe((res: any)=>{
      this.searcharticles = res.articles;
      this.mobileSpinner = false;
    })
  }
}
