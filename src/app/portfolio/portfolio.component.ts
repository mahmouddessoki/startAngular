import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  imgSrc : any;
  header : any;
  constructor() { }

  ngOnInit(): void {

    $(".col-md-4").click((e)=>{
      this.imgSrc = $(e.target).parent().find("img").attr("src")
      this.header = $(e.target).parent().find(".sr-only").text()
    })
  }

}
