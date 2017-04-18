import {Component, Input, OnInit} from '@angular/core';
import {PriceQuote} from "../price-quote/price-quote.component";

@Component({
  selector: 'app-another-order',
  templateUrl: './another-order.component.html',
  styleUrls: ['./another-order.component.css']
})
export class AnotherOrderComponent implements OnInit {

  @Input()
  anotherPriceQuote: PriceQuote;

  constructor() {
  }

  ngOnInit() {
  }

}
