import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  inputVal :any;
  nameValidation : boolean = true;
  emailValidation : boolean = true;
  telephoneValidation : boolean = true;
  value :any;
  constructor() { }

  ngOnInit(): void {
    $("#contact form .form-control").keyup((e)=>{
      let current = e.target;
      this.inputVal = $(current).val()
      if(this.inputVal != "")
      {
        $(current).prev().css("display" , "block")
      }
      else{
        $(current).prev().css("display" , "none")
      }
    })
    $("input").keyup((e)=>{
     let currentInput =  $(e.target).attr("type");
      this.value = $(e.target).val()
     if(currentInput === "text")
     {
       if(!(/^[A-z]{7,50}$/.test(this.value)))
       {
          this.nameValidation = false;
       }
       else{
        this.nameValidation = true;
       }

     }
     else if(currentInput === "email")
     {
       if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.value)))
       {
          this.emailValidation = false;
       }
       else{
        this.emailValidation = true;
       }

     }
     else
     {
       if(!(/^(01)[125]{1}[0-9]{8}$/.test(this.value)))
       {
          this.telephoneValidation = false;
       }
       else{
        this.telephoneValidation = true;
       }

     }
     
    })
  }




}
