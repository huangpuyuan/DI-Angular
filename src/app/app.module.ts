import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {Product1Component} from './product1/product1.component';
import {ProductService} from "./shared/product.service";
import {Product2Component} from './product2/product2.component';
import {LoggerService} from "./shared/logger.service";
import {AnotherProductService} from "./shared/another-product.service";
import {BindComponent} from './bind/bind.component';
import { MultiplePipe } from './pipe/multiple.pipe';
import { OrderComponent } from './order/order.component';
import { PriceQuoteComponent } from './price-quote/price-quote.component';
import { AnotherOrderComponent } from './another-order/another-order.component';
import { LifeComponent } from './life/life.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';

export function myFactory(logger: LoggerService, appConfig) {
  if (appConfig.isDev) {
    return new ProductService(logger);
  } else {
    return new AnotherProductService(logger);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component,
    BindComponent,
    MultiplePipe,
    OrderComponent,
    PriceQuoteComponent,
    AnotherOrderComponent,
    LifeComponent,
    ChildComponent,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: ProductService,
    useFactory: myFactory,
    deps: [LoggerService, "APP_CONFIG"]
  }, LoggerService,
    {
      provide: "APP_CONFIG", useValue: {isDev: false}
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
