import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { pictures } from '../model';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

@Input() picture: pictures
@Output() itemSelected = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  addtocart(){
  console.log("Item is clicked",this.picture.prodId);
  this.itemSelected.next(this.picture.prodId);
  }

}
