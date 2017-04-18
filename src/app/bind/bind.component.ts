import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  imgUrl: string = "http://placehold.it/300x250";
  size:number =2;
  constructor() {
  }

  ngOnInit() {
  }

  doInput(event: any) {
    //HTML属性和DOM属性的区别
    console.log(event.target.value);
    console.log(event.target.getAttribute('value'));
  }

  doOnClick(event: any) {
    console.log(event);
  }

}
