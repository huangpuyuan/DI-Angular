import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PriceQuote} from "./price-quote/price-quote.component";
import {Child2Component} from "./child2/child2.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit,AfterViewChecked {

  ngAfterViewInit(): void {
    console.log("父组件的视图初始化完毕");
  }

  ngAfterViewChecked(): void {
    //console.log("父组件的视图变更检测完毕");
  }

  stock = '';
  priceQuote: PriceQuote = new PriceQuote('', 0);
  anotherPriceQuote: PriceQuote = new PriceQuote('', 0);

  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }

  buyHandler(event: PriceQuote) {
    this.anotherPriceQuote = event;
  }

  title = 'Tom';
  greeting = 'Hello';
  user:{name:string} = {name: 'James'};
  divContent = "<div class='text-primary bg-warning'>我的偶像是勒布朗詹姆斯</div>"

  @ViewChild("child1")
  child1:Child2Component;

  constructor() {
  }

  ngOnInit():void{
    this.child1.greeting("James");
  }
}
