import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  imgUrl = 'http://placehold.it/300x250';
  size = 2;
  divClass: string;
  isBig = false;
  anotherDivClass: any = {
    a: false,
    b: false,
    c: false
  };
  isDev = true;
  divStyle: any = {
    color: 'red',
    background: 'yellow'
  };
  name: string = '';

  constructor() {
    setTimeout(() => {
      this.divClass = 'a b c';
      this.isBig = true;
      this.anotherDivClass = {
        a: true,
        b: true,
        c: true
      };
      this.isDev = false;
      this.divStyle = {
        color: 'white',
        background: 'red'
      };
    }, 3000);

    setInterval(() => {
      this.name = 'Tom';
    }, 3000);
  }

  ngOnInit() {
  }

  doInput(event: any) {
    // HTML属性和DOM属性的区别
    console.log(event.target.value);
    console.log(event.target.getAttribute('value'));
  }

  doOnInput(event) {
    this.name = event.target.value;
  }

  doOnClick(event: any) {
    console.log(event);
  }

}
