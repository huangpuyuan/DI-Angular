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
    MultiplePipe
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
