import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  private url = "https://newsapi.org";

  constructor(private http:HttpClient) { }

  getTopHeadlinesFromNig(page, pageSize){
    return this.http.get(`${this.url}/v2/top-headlines?country=ng&pageSize=${pageSize}&page=${page}&apikey=${environment.apiKey}`)
  }
  getAllSportsCategorySources(){
    return this.http.get(`${this.url}/v2/sources?category=sports&language=en&apikey=${environment.apiKey}`)
  }
  getAllSportsNews(page, pageSize){
    return this.http.get(`${this.url}/v2/everything?domains=foxsports.com,bleacherreport.com&pageSize=${pageSize}&page=${page}&language=en&apikey=${environment.apiKey}`)
  }
  getAllEntertainmentNews(page, pageSize){
    return this.http.get(`${this.url}/v2/everything?sources=entertainment-weekly,buzzfeed,ign,mashable,mtv-news&pageSize=${pageSize}&page=${page}&language=en&apikey=${environment.apiKey}`)
  }
  getAllTechNews(page, pageSize){
    return this.http.get(`${this.url}/v2/everything?sources=hacker-news,techcrunch,techradar,crypto-coins-news,the-next-web&pageSize=${pageSize}&page=${page}&language=en&apikey=${environment.apiKey}`)
  }
  loadSearchResults(whattofind, sortItemsBy, pageSize, page){
    return this.http.get(`${this.url}/v2/everything?q=${whattofind}&sortBy=${sortItemsBy}&pageSize=${pageSize}&page=${page}&language=en&apikey=${environment.apiKey}`)
  }
  
}
