import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";

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
  searchInput: FormControl = new FormControl();
  birthday: Date = new Date();
  pi: number = 3.1415926;
  mySize: number = 7;

  constructor() {
    // 响应式编程RxJS 响应式处理HTTP请求 万物用流处理
    this.searchInput.valueChanges
      .debounceTime(500)
      .subscribe(stockCode => this.getStockInfo(stockCode));

    Observable.from([1, 2, 3, 4])
      .filter(e => e % 2 == 0)
      .map(e => e * e)
      .subscribe(
        e => console.log(e),
        err => console.error(err),
        () => console.log(" 结束啦 ")
      );

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

  onKey(value: string) {
    console.log(value);
  }

  getStockInfo(value: string) {
    // 流
    console.log(value);
  }
}
