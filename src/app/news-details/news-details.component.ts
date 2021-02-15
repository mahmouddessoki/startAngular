import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import {NewsService} from "../news-service.service"
@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  oneNews : any;
  id : any;
  constructor(private _NewsService : NewsService, private _ActivatedRoute : ActivatedRoute) {
    this.id = this._ActivatedRoute.snapshot.paramMap.get("id");
    this._NewsService.getNews().subscribe((news)=>{
      this.oneNews = news.articles[this.id]
    })
   }

  ngOnInit(): void {
  }

}
