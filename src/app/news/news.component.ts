import { Component, OnInit,OnDestroy } from '@angular/core';
import {NewsService} from '../news-service.service'
import * as $ from 'jquery'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit,OnDestroy {
  EgNews : any;
  newsLeave :any;
  sourceVal :any;
  
  constructor(public _NewsService : NewsService) { 
   this.newsLeave =  _NewsService.getNews().subscribe((ourNews)=>{
      this.EgNews = ourNews.articles
    })
  }

  ngOnInit(): void {
    $(".search1").keyup(()=>{
      this.sourceVal = $(".search1").val();
      this.newsLeave =  this._NewsService.getNewsByKeyWord(this.sourceVal).subscribe((ourNews)=>{
        this.EgNews = ourNews.articles;
      })
      
    })
    $(".search2").keyup(()=>{
      this.sourceVal = $(".search2").val();
      this.newsLeave =  this._NewsService.getNewsByCategory(this.sourceVal).subscribe((ourNews)=>{
        this.EgNews = ourNews.articles;
      })
      
    })

  }
  ngOnDestroy():void
  {
    this.newsLeave.unsubscribe();
  }
}
