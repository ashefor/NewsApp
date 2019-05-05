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
  testapi(){
    return this.http.get('https://reqres.in/api/users?page=2')
  }
  getTopHeadlinesFromNig(page){
    return this.http.get(`${this.url}/v2/top-headlines?country=ng&pageSize=10&page=${page}&apikey=${this.apikey}`)
  }
  getAllSportsCategorySources(){
    return this.http.get(`${this.url}/v2/sources?category=sports&language=en&apikey=${this.apikey}`)
  }
  getAllSportsNews(page){
    return this.http.get(`${this.url}/v2/everything?domains=foxsports.com,bleacherreport.com&pageSize=10&page=${page}&language=en&apikey=${this.apikey}`)
  }
  // returnFirstPage(){
  //   return this.http.get(`${this.url}/v2/top-headlines?country=ng&pageSize=10&page=1&apikey=${this.apikey}`)
  // }
  // returnSecondPage(){
  //   return this.http.get(`${this.url}/v2/top-headlines?country=ng&pageSize=10&page=2&apikey=${this.apikey}`)
  // }
}
