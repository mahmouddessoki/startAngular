import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(private _Router :Router) { }

  ngOnInit(): void {
  }
  getHome() :void{
    this._Router.navigate(['/angular'])
  }
  getContact() : void{
    this._Router.navigate(['/contact'])
  }

}
