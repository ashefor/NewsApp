import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {
  q: string;
  fixedInViewport = true;
  fixedTopGap = 0;
  fixedBottomGap = 0;
  constructor(private route: ActivatedRoute, private service: NewsapiService) { }

  ngOnInit() {
  }

}
