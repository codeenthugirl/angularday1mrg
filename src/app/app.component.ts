import { Component,OnInit,ViewChild} from '@angular/core';
import { pictures } from './model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

@ViewChild('form') prodform:NgForm
cart: number[] =[];


pictures: pictures[]= [

  {
  prodId:1,
  pictureurl: "https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  comment: "This is a cat picture"
  },

  {
  prodId:2,
  pictureurl: "https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  comment: "This is a cat picture"
  }
  ]

  constructor() { 
  }

  ngOnInit() {
  }

 addtoCart(prodID: number){
	this.cart.push(prodID);
 }
 deleteitem(i: number){
 this.cart.splice(i,1);
 }
 Addmodel(){
 this.pictures.unshift(this.prodform.value);
 }
}
