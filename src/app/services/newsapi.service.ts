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
  getTopHeadlinesFromNig(page, pageSize){
    return this.http.get(`${this.url}/v2/top-headlines?country=ng&pageSize=${pageSize}&page=${page}&apikey=${this.apikey}`)
  }
  getAllSportsCategorySources(){
    return this.http.get(`${this.url}/v2/sources?category=sports&language=en&apikey=${this.apikey}`)
  }
  getAllSportsNews(page, pageSize){
    return this.http.get(`${this.url}/v2/everything?domains=foxsports.com,bleacherreport.com&pageSize=${pageSize}&page=${page}&language=en&apikey=${this.apikey}`)
  }
  loadEverything(whattofind, sortItemsBy){
    return this.http.get(`${this.url}/v2/everything?q=${whattofind}&sortBy=${sortItemsBy}&language=en&apikey=${this.apikey}`)
  }
  testload(whattofind, sortItemsBy, page){
    return this.http.get(`${this.url}/v2/everything?q=${whattofind}&sortBy=${sortItemsBy}&pageSize=20&page=${page}&language=en&apikey=${this.apikey}`)
  }
  // returnFirstPage(){
  //   return this.http.get(`${this.url}/v2/top-headlines?country=ng&pageSize=10&page=1&apikey=${this.apikey}`)
  // }
  // returnSecondPage(){
  //   return this.http.get(`${this.url}/v2/top-headlines?country=ng&pageSize=10&page=2&apikey=${this.apikey}`)
  // }
}
