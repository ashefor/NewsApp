import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  private apikey = "175ee5f9716940b7bbd37acc3567e557";
  private url = "https://newsapi.org";

  constructor(private http:HttpClient) { }

  getAllnews(){
    return this.http.get(`${this.url}/v2/sources?language=en&apikey=${this.apikey}`);
    // return this.http.get(this.url)
  }
  getTopHeadlinesFromNig(){
    return this.http.get(`${this.url}/v2/top-headlines?country=ng&pageSize=40&apikey=${this.apikey}`)
  }
  returnFirstPage(){
    return this.http.get(`${this.url}/v2/top-headlines?country=ng&pageSize=10&page=1&apikey=${this.apikey}`)
  }
  returnSecondPage(){
    return this.http.get(`${this.url}/v2/top-headlines?country=ng&pageSize=10&page=2&apikey=${this.apikey}`)
  }
}
