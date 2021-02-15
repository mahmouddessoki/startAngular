import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public _HttpClient : HttpClient) { }
    getNews() : Observable <any>
    {
        return this._HttpClient.get("https://newsapi.org/v2/top-headlines?country=eg&pageSize=50&apiKey=f55e51c58c5644f18fd0d2a2fa8762f4")
      
      
      
    }
    getNewsByKeyWord(keyWord:string):Observable<any>
    {
      return this._HttpClient.get("https://newsapi.org/v2/top-headlines?country=eg&q="+keyWord+"&pageSize=50&apiKey=f55e51c58c5644f18fd0d2a2fa8762f4")

    }
    getNewsByCategory(cat:string):Observable<any>
    {
      return this._HttpClient.get("https://newsapi.org/v2/top-headlines?country=eg&category="+cat+"&apiKey=f55e51c58c5644f18fd0d2a2fa8762f4")

    }


}
