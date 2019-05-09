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
  pagecount = 1;
  fixedInViewport = true;
  fixedTopGap = 0;
  fixedBottomGap = 0;
  endofpage = false;
  pageloader = true;
  color = 'primary';
  mode = 'indeterminate';

  constructor(private route: ActivatedRoute, private service: NewsapiService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      console.log(params)
      this.q = params.q;
      this.sortedBy = params.sortBy;
      console.log(this.q)
      
    })
    this.service.testload(this.q, this.sortedBy, this.pagecount).subscribe((res:any)=>{
      this.searcharticles = res.articles
      this.pageloader = false;
      console.log(this.searcharticles)
    })
  }


  onScrollDown(){
    this.pagecount++
    this.service.testload(this.q, this.sortedBy, this.pagecount).subscribe((res:any)=>{
      this.searcharticles = this.searcharticles.concat(res.articles)
      console.log(this.searcharticles.length)
    })
    console.log('scrolled')
  }
}
