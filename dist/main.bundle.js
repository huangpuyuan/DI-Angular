webpackJsonp([1,5],{

/***/ 139:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 139;


/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(165);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__price_quote_price_quote_component__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnotherOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnotherOrderComponent = (function () {
    function AnotherOrderComponent() {
    }
    AnotherOrderComponent.prototype.ngOnInit = function () {
    };
    return AnotherOrderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__price_quote_price_quote_component__["b" /* PriceQuote */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__price_quote_price_quote_component__["b" /* PriceQuote */]) === "function" && _a || Object)
], AnotherOrderComponent.prototype, "anotherPriceQuote", void 0);
AnotherOrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-another-order',
        template: __webpack_require__(238),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [])
], AnotherOrderComponent);

var _a;
//# sourceMappingURL=another-order.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__price_quote_price_quote_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__child2_child2_component__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent() {
        this.stock = '';
        this.priceQuote = new __WEBPACK_IMPORTED_MODULE_1__price_quote_price_quote_component__["b" /* PriceQuote */]('', 0);
        this.anotherPriceQuote = new __WEBPACK_IMPORTED_MODULE_1__price_quote_price_quote_component__["b" /* PriceQuote */]('', 0);
        this.title = 'Tom';
        this.greeting = 'Hello';
        this.user = { name: 'James' };
        this.divContent = "<div class='text-primary bg-warning'>我的偶像是勒布朗詹姆斯</div>";
    }
    AppComponent.prototype.ngAfterContentInit = function () {
        console.log("父组件投影内容初始化完毕");
    };
    AppComponent.prototype.ngAfterContentChecked = function () {
        // console.log("父组件投影内容变更检测完毕");
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        console.log("父组件的视图初始化完毕");
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        //console.log("父组件的视图变更检测完毕");
    };
    AppComponent.prototype.priceQuoteHandler = function (event) {
        this.priceQuote = event;
    };
    AppComponent.prototype.buyHandler = function (event) {
        this.anotherPriceQuote = event;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.child1.greeting("James");
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("child1"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__child2_child2_component__["a" /* Child2Component */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__child2_child2_component__["a" /* Child2Component */]) === "function" && _a || Object)
], AppComponent.prototype, "child1", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(239),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product1_product1_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_product_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product2_product2_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_logger_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_another_product_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bind_bind_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipe_multiple_pipe__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__order_order_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__price_quote_price_quote_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__another_order_another_order_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__life_life_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__child_child_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__child2_child2_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__child3_child3_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__child4_child4_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__child5_child5_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__child6_child6_component__ = __webpack_require__(157);
/* unused harmony export myFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routeConfig = [
    { path: 'child6', component: __WEBPACK_IMPORTED_MODULE_22__child6_child6_component__["a" /* Child6Component */] },
    { path: 'child5', component: __WEBPACK_IMPORTED_MODULE_21__child5_child5_component__["a" /* Child5Component */] }
];
function myFactory(logger, appConfig) {
    if (appConfig.isDev) {
        return new __WEBPACK_IMPORTED_MODULE_7__shared_product_service__["a" /* ProductService */](logger);
    }
    else {
        return new __WEBPACK_IMPORTED_MODULE_10__shared_another_product_service__["a" /* AnotherProductService */](logger);
    }
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__product1_product1_component__["a" /* Product1Component */],
            __WEBPACK_IMPORTED_MODULE_8__product2_product2_component__["a" /* Product2Component */],
            __WEBPACK_IMPORTED_MODULE_11__bind_bind_component__["a" /* BindComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pipe_multiple_pipe__["a" /* MultiplePipe */],
            __WEBPACK_IMPORTED_MODULE_13__order_order_component__["a" /* OrderComponent */],
            __WEBPACK_IMPORTED_MODULE_14__price_quote_price_quote_component__["a" /* PriceQuoteComponent */],
            __WEBPACK_IMPORTED_MODULE_15__another_order_another_order_component__["a" /* AnotherOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_16__life_life_component__["a" /* LifeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__child_child_component__["a" /* ChildComponent */],
            __WEBPACK_IMPORTED_MODULE_18__child2_child2_component__["a" /* Child2Component */],
            __WEBPACK_IMPORTED_MODULE_19__child3_child3_component__["a" /* Child3Component */],
            __WEBPACK_IMPORTED_MODULE_20__child4_child4_component__["a" /* Child4Component */],
            __WEBPACK_IMPORTED_MODULE_21__child5_child5_component__["a" /* Child5Component */],
            __WEBPACK_IMPORTED_MODULE_22__child6_child6_component__["a" /* Child6Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routeConfig)
        ],
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_7__shared_product_service__["a" /* ProductService */],
                useFactory: myFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_9__shared_logger_service__["a" /* LoggerService */], "APP_CONFIG"]
            }, __WEBPACK_IMPORTED_MODULE_9__shared_logger_service__["a" /* LoggerService */],
            {
                provide: "APP_CONFIG", useValue: { isDev: false }
            }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BindComponent = (function () {
    function BindComponent() {
        var _this = this;
        this.imgUrl = 'http://placehold.it/300x250';
        this.size = 2;
        this.isBig = false;
        this.anotherDivClass = {
            a: false,
            b: false,
            c: false
        };
        this.isDev = true;
        this.divStyle = {
            color: 'red',
            background: 'yellow'
        };
        this.name = '';
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.birthday = new Date();
        this.pi = 3.1415926;
        this.mySize = 7;
        // 响应式编程RxJS 响应式处理HTTP请求 万物用流处理
        this.searchInput.valueChanges
            .debounceTime(500)
            .subscribe(function (stockCode) { return _this.getStockInfo(stockCode); });
        __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].from([1, 2, 3, 4])
            .filter(function (e) { return e % 2 == 0; })
            .map(function (e) { return e * e; })
            .subscribe(function (e) { return console.log(e); }, function (err) { return console.error(err); }, function () { return console.log(" 结束啦 "); });
        setTimeout(function () {
            _this.divClass = 'a b c';
            _this.isBig = true;
            _this.anotherDivClass = {
                a: true,
                b: true,
                c: true
            };
            _this.isDev = false;
            _this.divStyle = {
                color: 'white',
                background: 'red'
            };
        }, 3000);
        setInterval(function () {
            _this.name = 'Tom';
        }, 3000);
    }
    BindComponent.prototype.ngOnInit = function () {
    };
    BindComponent.prototype.doInput = function (event) {
        // HTML属性和DOM属性的区别
        console.log(event.target.value);
        console.log(event.target.getAttribute('value'));
    };
    BindComponent.prototype.doOnInput = function (event) {
        this.name = event.target.value;
    };
    BindComponent.prototype.doOnClick = function (event) {
        console.log(event);
    };
    BindComponent.prototype.onKey = function (value) {
        console.log(value);
    };
    BindComponent.prototype.getStockInfo = function (value) {
        // 流
        console.log(value);
    };
    return BindComponent;
}());
BindComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-bind',
        template: __webpack_require__(240),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [])
], BindComponent);

//# sourceMappingURL=bind.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Child3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Child3Component = (function () {
    function Child3Component() {
    }
    Child3Component.prototype.ngOnInit = function () {
    };
    return Child3Component;
}());
Child3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-child3',
        template: __webpack_require__(242),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [])
], Child3Component);

//# sourceMappingURL=child3.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Child4Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Child4Component = (function () {
    function Child4Component() {
        this.message = 'hello';
    }
    Child4Component.prototype.ngAfterContentInit = function () {
        console.log("子组件投影内容初始化完毕");
        this.message = 'hello world';
    };
    Child4Component.prototype.ngAfterContentChecked = function () {
        // console.log("子组件投影内容变更检测完毕");
    };
    Child4Component.prototype.ngOnInit = function () {
    };
    return Child4Component;
}());
Child4Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-child4',
        template: __webpack_require__(243),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [])
], Child4Component);

//# sourceMappingURL=child4.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Child5Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Child5Component = (function () {
    function Child5Component() {
    }
    Child5Component.prototype.ngOnDestroy = function () {
        console.log("child5组件被销毁");
    };
    Child5Component.prototype.ngOnInit = function () {
    };
    return Child5Component;
}());
Child5Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-child5',
        template: __webpack_require__(244),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [])
], Child5Component);

//# sourceMappingURL=child5.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Child6Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Child6Component = (function () {
    function Child6Component() {
    }
    Child6Component.prototype.ngOnDestroy = function () {
        console.log("child6组件被销毁");
    };
    Child6Component.prototype.ngOnInit = function () {
    };
    return Child6Component;
}());
Child6Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-child6',
        template: __webpack_require__(245),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [])
], Child6Component);

//# sourceMappingURL=child6.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChildComponent = (function () {
    function ChildComponent() {
        this.message = '初始化消息';
        this.changeDetected = false;
        this.noChangeCount = 0;
    }
    ChildComponent.prototype.ngOnDestroy = function () {
        console.log("child组件被销毁");
    };
    ChildComponent.prototype.ngOnInit = function () {
    };
    ChildComponent.prototype.ngOnChanges = function (changes) {
        console.log(JSON.stringify(changes, null, 2));
    };
    // 调用ngDoCheck钩子
    ChildComponent.prototype.checkHandler = function () {
        if (this.user.name !== this.oldUsername) {
            this.changeDetected = true;
            console.log("DoCheck:user.name" + this.oldUsername + "变为" + this.user.name);
            this.oldUsername = this.user.name;
        }
        if (this.changeDetected) {
            this.noChangeCount = 0;
        }
        else {
            this.noChangeCount = this.noChangeCount + 1;
            console.log("DoCheck:user.name没变化时ngDoCheck方法已经被调用了" + this.noChangeCount + "次");
        }
        this.changeDetected = false;
    };
    ChildComponent.prototype.ngDoCheck = function () {
        // this.checkHandler();
    };
    return ChildComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], ChildComponent.prototype, "greeting", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], ChildComponent.prototype, "user", void 0);
ChildComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-child',
        template: __webpack_require__(246),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [])
], ChildComponent);

//# sourceMappingURL=child.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var logIndex = 1;
var LifeComponent = (function () {
    function LifeComponent() {
        this.logIt('name属性在constructor里的值是：' + name);
    }
    LifeComponent.prototype.logIt = function (msg) {
        console.log("#" + logIndex++ + " " + msg);
    };
    LifeComponent.prototype.ngOnInit = function () {
        this.logIt("ngOnInit");
    };
    LifeComponent.prototype.ngOnChanges = function (changes) {
        var name = changes['name'].currentValue;
        this.logIt('name属性在ngOnChanges里的值是：' + name);
    };
    LifeComponent.prototype.ngDoCheck = function () {
        // this.logIt("ngDoCheck");
    };
    LifeComponent.prototype.ngAfterContentInit = function () {
        this.logIt("ngAfterContentInit");
    };
    LifeComponent.prototype.ngAfterContentChecked = function () {
        // this.logIt("ngAfterContentChecked");
    };
    LifeComponent.prototype.ngAfterViewInit = function () {
        this.logIt("ngAfterViewInit");
    };
    LifeComponent.prototype.ngAfterViewChecked = function () {
        // this.logIt("ngAfterViewChecked");
    };
    LifeComponent.prototype.ngOnDestroy = function () {
        this.logIt("ngOnDestroy");
    };
    return LifeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], LifeComponent.prototype, "name", void 0);
LifeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-life',
        template: __webpack_require__(247),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [])
], LifeComponent);

//# sourceMappingURL=life.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderComponent = (function () {
    function OrderComponent() {
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    return OrderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], OrderComponent.prototype, "stockCode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], OrderComponent.prototype, "amount", void 0);
OrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-order',
        template: __webpack_require__(248),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [])
], OrderComponent);

//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiplePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MultiplePipe = (function () {
    function MultiplePipe() {
    }
    MultiplePipe.prototype.transform = function (value, args) {
        if (!args) {
            args = 1;
        }
        return value * args;
    };
    return MultiplePipe;
}());
MultiplePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'multiple'
    })
], MultiplePipe);

//# sourceMappingURL=multiple.pipe.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Product1Component = (function () {
    function Product1Component(productService) {
        this.productService = productService;
    }
    Product1Component.prototype.ngOnInit = function () {
        this.product = this.productService.getProduct();
    };
    return Product1Component;
}());
Product1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-product1',
        template: __webpack_require__(250),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], Product1Component);

var _a;
//# sourceMappingURL=product1.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Product2Component = (function () {
    function Product2Component(injector) {
        this.injector = injector;
        this.productService = injector.get(__WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */]);
    }
    Product2Component.prototype.ngOnInit = function () {
        this.product = this.productService.getProduct();
    };
    return Product2Component;
}());
Product2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-product2',
        template: __webpack_require__(251),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */]) === "function" && _a || Object])
], Product2Component);

var _a;
//# sourceMappingURL=product2.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_product_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_service__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnotherProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnotherProductService = (function () {
    function AnotherProductService(logger) {
        this.logger = logger;
    }
    AnotherProductService.prototype.getProduct = function () {
        return new __WEBPACK_IMPORTED_MODULE_1_app_shared_product_service__["b" /* Product */](1, "sumsung7", 4899, "新款三星手机");
    };
    return AnotherProductService;
}());
AnotherProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__logger_service__["a" /* LoggerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__logger_service__["a" /* LoggerService */]) === "function" && _a || Object])
], AnotherProductService);

var _a;
//# sourceMappingURL=another-product.service.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".title {\r\n  margin-top: 0px;\r\n}\r\n\r\n.parent {\r\n  background: cyan;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n}\r\n\r\n.wrapper {\r\n  background: cyan;\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".a{\r\n  background: yellow;\r\n}\r\n.b{\r\n  color:red;\r\n}\r\n.c{\r\n  font-size: 18px;\r\n}\r\n.row > div{\r\n  border: 1px solid #ccc;\r\n  border-bottom: none;\r\n  padding: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".wrapper{\r\n  background: lightgreen;\r\n  border-radius:5px;\r\n  border: 1px solid #ccc;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".wrapper{\r\n  background: lightgreen;\r\n  border-radius:5px;\r\n  border: 1px solid #ccc;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".child{\r\n  display: block;\r\n  background: lightgreen;\r\n  border-radius:5px;\r\n  padding:10px;\r\n  margin: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 subComponent\">\n  <h4>我是另一个子组件下单组件<small>接收报价组件的信息</small></h4>\n  <p>买<code>100</code>手<i><b>{{anotherPriceQuote.stockCode}}</b></i>股票，买入价格是 <code>{{anotherPriceQuote.lastPrice| number:\"2.2-2\"}}</code></p>\n  <p class=\"text-danger\"><small>注意要点：下单组件和报价组件彼此互不相知的情况下通过<b>父组件</b>这个中间人进行通讯。\n    另外,如果两个组件没有共同的父组件，需要通过 <b>服务</b>来作为中间人进行组件间通讯</small></p>\n</div>\n"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div>\r\n    <h2 class=\"page-header title\">\r\n      <small>Angular2依赖注入、数据绑定、通讯、生命周期、构建和部署</small>\r\n    </h2>\r\n  </div>\r\n  <div class=\"panel-group\" id=\"accordion\" aria-multiselectable=\"true\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\" id=\"headingOne\">\r\n        <h4 class=\"panel-title\">\r\n          <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\"\r\n             aria-expanded=\"true\" aria-controls=\"collapseOne\">依赖注入</a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapseOne\" class=\"panel-collapse collapse\" aria-labelledby=\"headingOne\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"row\">\r\n            <app-product1></app-product1>\r\n            <app-product2></app-product2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-bind></app-bind>\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\" id=\"headingThree\">\r\n        <h4 class=\"panel-title\">\r\n          <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\"\r\n             aria-expanded=\"true\"\r\n             aria-controls=\"collapseThree\">组件间通讯</a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapseThree\" class=\"panel-collapse collapse\" aria-labelledby=\"headingThree\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"form-group form-inline\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 subComponent\">\r\n                <h3 class=\"DI-title\">我是父组件\r\n                  <small>负责发送或接收信息与组件间进行通讯</small>\r\n                </h3>\r\n                <span>发送股票代码给子组件1：</span><input class=\"form-control\" type=\"text\" placeholder=\"请输入股票代码\"\r\n                                                [(ngModel)]=\"stock\">\r\n                <p style=\"font-size: 17px;\">\r\n                  这是在<b>报价组件</b>外部接收子组件信息，股票代码是<i><b>{{priceQuote.stockCode}}</b></i>,\r\n                  股票价格是 <code>{{priceQuote.lastPrice | number:'2.2-2'}}</code>,并作为<b>中间人</b>组件传值给<b>下单组件</b>\r\n                </p>\r\n                <p class=\"text-danger\">注意要点：在构建组件的时候要先设计好组件间的通讯模式，然后在构建组件或服务的输入、输出、中间人（谁和谁通讯需要谁作为中间人）。</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <app-order [stockCode]=\"stock\" [amount]=\"100\"></app-order>\r\n              <app-price-quote (buyIt)=\"buyHandler($event)\" (priceChange)=\"priceQuoteHandler($event)\"></app-price-quote>\r\n              <app-another-order [anotherPriceQuote]=\"anotherPriceQuote\"></app-another-order>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" id=\"headingFour\">\r\n        <h4 class=\"panel-title\">\r\n          <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\"\r\n             aria-expanded=\"true\"\r\n             aria-controls=\"collapseFour\">生命周期钩子</a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapseFour\" class=\"panel-collapse collapse in\" aria-labelledby=\"headingFour\">\r\n        <div class=\"panel-body\">\r\n          <app-life class=\"row\" [name]=\"title\"></app-life>\r\n          <div class=\"parent form-inline\">\r\n            <h4>我是父组件</h4>\r\n            <div class=\"form-group\">\r\n              问候语: <input class=\"form-control\" type=\"text\" [(ngModel)]=\"greeting\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              姓名: <input class=\"form-control\" type=\"text\" [(ngModel)]=\"user.name\">\r\n            </div>\r\n            <hr>\r\n            <p class=\"text-danger\">注意：改变user对象的name属性，user对象的引用自身是没有改变，故不触发ngOnChanges方法</p>\r\n            <app-child [greeting]=\"greeting\" [user]=\"user\"></app-child>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <h4>投影 :<code>ngContent</code></h4>\r\n              <div class=\"wrapper\">\r\n                <h4>我是父组件</h4>\r\n                <div>这个div定义在父组件中</div>\r\n                <app-child3>\r\n                  <div class=\"header\">这是页头.这个div是父组件投影到子组件的,\r\n                    title是{{title}}\r\n                  </div>\r\n                  <div class=\"footer\">这是页脚.这个div是父组件投影到子组件的</div>\r\n                </app-child3>\r\n                <p>下面是用 <code>[innerHTML]</code>指令生成的：</p>\r\n                <div [innerHTML]=\"divContent\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <h4> 变更检测\r\n                <small>（Angular最复杂的模块）:当你写一个对性能要求很高的复杂页面的时候。比如页面展示几百个单元格的表格，并数据实时发生变动</small>\r\n              </h4>\r\n              <p>变更检测的策略：Default策略、OnPush策略</p>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <h4>视图钩子 <code>AfterViewInit/AfterViewChecked</code></h4>\r\n              <app-child2 #child1></app-child2>\r\n              <app-child2 #child2></app-child2>\r\n              <button (click)=\"child2.greeting('Jerry')\" class=\"btn btn-success\">调用#child2</button>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <h4>投影钩子<code>AfterContentInit/AfterContentChecked</code></h4>\r\n              <app-child4></app-child4>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <h4>组件销毁 <code>ngOnDestory</code></h4>\r\n              <p class=\"bg-warning\">在路由的时候触发</p>\r\n              <h5>请使用<kbd>F12</kbd> 查看console.log中的变化</h5>\r\n              <a [routerLink]=\"['/child5']\">child5</a>\r\n              <a [routerLink]=\"['/child6']\">child6</a>\r\n              <a [routerLink]=\"['/']\">清空</a>\r\n              <router-outlet></router-outlet>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-success\">\r\n  <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\r\n    <h4 class=\"panel-title\">\r\n      <a class=\"collapsed\"  data-toggle=\"collapse\" data-parent=\"#accordion\"  href=\"#collapseTwo\" aria-expanded=\"true\"\r\n         aria-controls=\"collapseTwo\">数据绑定</a>\r\n    </h4>\r\n  </div>\r\n  <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\r\n    <div class=\"panel-body\">\r\n      <span>Angular里面的事件绑定： </span>\r\n      <button class=\"btn btn-default\" (click)=\"doOnClick($event)\">点我</button>\r\n      <hr>\r\n      <p>注意点1：<b>差值表达式</b>和<b>属性绑定</b>是相同的东西。如下示例</p>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <p>属性绑定1: <code>&lt;img [src]=\"imgUrl\" /&gt;</code></p>\r\n          <img [src]=\"imgUrl\"/>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <p>属性绑定2: <code> &lt;img src=<span>\"{{</span>imgUrl<span>}}\"</span>/&gt;</code></p>\r\n          <img src=\"{{imgUrl}}\"/>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <p>数据绑定3：html属性和DOM属性</p>\r\n          <input value=\"Tom\" (input)=\"doInput($event)\">\r\n          <button class=\"btn btn-default\" disabled>点我</button>\r\n          <hr>\r\n          <p>html属性和DOM属性的区别，模板绑定是通过DOM属性和事件来工作的不是HTML属性</p>\r\n          <p>插值表达式是DOM属性绑定</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <p>数据绑定4：<br>HTML属性绑定: <code>[attr.colspan]=\"tableColspan\"</code></p>\r\n          <p>CSS类绑定：<code>[class] [class.specail] [ngClass]=\"{{ '{' }}aaa:isA,bbb:isB{{ '}' }}\"</code></p>\r\n          <p>样式属性绑定：<code> [style.specail]=\"isSpecial?'red':'green'\" </code><br/>\r\n            <code>[ngStyle]=\"{{ '{' }}'font-style':this.canSave?'italic':'normal'{{ '}' }}\"</code></p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <table class=\"table table-striped\">\r\n            <tr>\r\n              <td [attr.colspan]=\"size\">January</td>\r\n              <td>ABC</td>\r\n            </tr>\r\n            <tr>\r\n              <td colspan=\"2\">February</td>\r\n              <td>March</td>\r\n            </tr>\r\n            <tr>\r\n              <td colspan=\"1\">March</td>\r\n              <td>April</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <p>html属性绑定：样式绑定</p>\r\n          <div [class]=\"divClass\">测试1</div>\r\n          <div class=\"a b \" [class.c]=\"isBig\">测试2</div>\r\n          <div [ngClass]=\"anotherDivClass\">测试3</div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <p>html属性绑定：样式绑定</p>\r\n          <div [style.color]=\"isDev?'red':'blue'\">样式绑定</div>\r\n          <div [style.font-size.em]=\"isDev?1.5:1\">样式绑定2</div>\r\n          <div [ngStyle]=\"divStyle\">样式绑定3</div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <p>双向数据绑定：</p>\r\n          <div class=\"form-inline\">\r\n            <div class=\"form-group\">\r\n              <input id=\"input1\" class=\"form-control\" [value]=\"name\" (input)=\"doOnInput($event)\">\r\n              <label for=\"input1\">{{name}}</label>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input id=\"input2\" class=\"form-control\" [(ngModel)]=\"name\">\r\n              <label for=\"input2\">{{name}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <p><b>RxJS</b>响应式:</p>\r\n          <div class=\"form-group\">\r\n          <input class=\"form-control\" #myField (keyup)=\"onKey(myField.value)\">\r\n          </div>\r\n          <p>响应式Demo:</p>\r\n          <div class=\"form-group\">\r\n            <input class=\"form-control\" [formControl]=\"searchInput\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <p>管道Demo：负责处理原始值到显示值的转换</p>\r\n          <p>当前服务器时间戳(原始值)：{{birthday}}</p>\r\n          <p>显示的时间（date）：{{birthday | date}}</p>\r\n          <p>格式化时间（data:'yyyy-MM--dd HH:mm:ss'）{{birthday | date:'yyyy-MM--dd HH:mm:ss'}}</p>\r\n          <p>月份大写（uppercase）： {{birthday | date | uppercase}}</p>\r\n          <p>月份小写（lowercase）： {{birthday | date | lowercase}}</p>\r\n          <hr>\r\n          <p> 圆周率是：{{pi}}</p>\r\n          <p>格式化（二位整数二位小数）{{pi|number:'2.2-2'}}</p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <p>自定义管道：如定义一个乘法的管道 输入命令 <kbd>ng g pipe pipe/multiple</kbd>创建管道</p>\r\n          <p>我自己定义的管道multiple ： {{mySize| multiple:'2'}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  child2 works!\r\n</p>\r\n"

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <h4>我是子组件</h4>\r\n  <ng-content select=\".header\"></ng-content>\r\n  <div>这个div定义在子组件中</div>\r\n  <ng-content select=\".footer\"></ng-content>\r\n</div>\r\n"

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <h4>我是另一个子组件</h4>\n  <div>这个div定义在子组件中</div>\n  <p>{{message}}</p><i>message可以改变</i>\n</div>\n"

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

module.exports = "<p>Child5 works</p>\n"

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = "<p>\n  child6 works!\n</p>\n"

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "<div class=\"child form-group\">\r\n  <h4>我是子组件</h4>\r\n  <div>问候语：{{greeting}}</div>\r\n  <div>姓名：{{user.name}}</div>\r\n  <div >消息：<input class=\"form-control\" [(ngModel)]=\"message\"></div>\r\n  <hr>\r\n  <h4>总结：</h4>\r\n  <p class=\"text-danger\">1.虽然user对象的name属性变化没有触发ngOnChanges方法,子组件的值也变了，得益于Angular的变更检测机制。</p>\r\n  <p class=\"text-danger\">2.注意：改变子组件的message没有触发ngOnChanges方法，因为子组件的message属性没有使用@Input装饰器来注解，不是一个输入属性，而ngOnChanges方法只有当输入属性变化是才被调用。</p>\r\n  <button class=\"btn btn-danger\" (click)=\"checkHandler()\" >触发</button>\r\n</div>\r\n"

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\">\r\n  <h5>请使用<kbd>F12</kbd> 查看console.log中的变化</h5>\r\n</div>\r\n"

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 subComponent\">\n  <h4>我是子组件 <small>接收父组件的Input的信息</small></h4>\n  <p>买 <code>{{amount}}</code>手<i><b>{{stockCode}}</b></i>股票</p>\n</div>\n"

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 subComponent\">\r\n  <h4> 这是报价组件: <small>给父组件发送信息</small></h4>\r\n  <span> 股票代码是 <i><b>{{stockCode}}</b></i>,股票价格是 <code>{{price | number:'2.2-2'}}</code></span>\r\n  <input style=\"display: inline-block\" type=\"button\" class=\"btn btn-primary\" value=\"立即购买\"\r\n     (click)=\"buyStock($event)\" >\r\n  <button class=\"btn btn-sm btn-success\" (click)=\"taggleIt()\">{{isIntervalStop?'继续':'停止'}}</button>\r\n</div>\r\n"

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3\">\r\n  <h3 class=\"DI-title\"><small>商品详情1:</small></h3>\r\n  <p>名称：{{product.title}}</p>\r\n  <p>价格：{{product.price}}</p>\r\n  <p>描述：{{product.desc}}</p>\r\n</div>\r\n"

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3\">\r\n  <h3 class=\"DI-title\"><small>商品详情2:</small></h3>\r\n  <p>名称：{{product.title}}</p>\r\n  <p>价格：{{product.price}}</p>\r\n  <p>描述：{{product.desc}}</p>\r\n</div>\r\n"

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger_service__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Product; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = (function () {
    function ProductService(logger) {
        this.logger = logger;
    }
    ProductService.prototype.getProduct = function () {
        this.logger.log("getProduct方法被调用");
        return new Product(0, 'iphone7', 5899, "最新苹果手机");
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__logger_service__["a" /* LoggerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__logger_service__["a" /* LoggerService */]) === "function" && _a || Object])
], ProductService);

var Product = (function () {
    function Product(id, title, price, desc) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.desc = desc;
    }
    return Product;
}());

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(140);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceQuoteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PriceQuote; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceQuoteComponent = (function () {
    function PriceQuoteComponent() {
        this.stockCode = "IBM";
        this.lastPrice = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.buy = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.isIntervalStop = false;
        this.start();
    }
    PriceQuoteComponent.prototype.start = function () {
        var _this = this;
        this.myInterval = setInterval(function () {
            var priceQuote = new PriceQuote(_this.stockCode, 100 * Math.random());
            _this.price = priceQuote.lastPrice;
            _this.lastPrice.emit(priceQuote);
        }, 1000);
    };
    PriceQuoteComponent.prototype.taggleIt = function () {
        if (!this.isIntervalStop) {
            clearInterval(this.myInterval);
            this.isIntervalStop = true;
        }
        else {
            this.start();
            this.isIntervalStop = false;
        }
    };
    PriceQuoteComponent.prototype.ngOnInit = function () {
    };
    PriceQuoteComponent.prototype.buyStock = function (event) {
        this.buy.emit(new PriceQuote(this.stockCode, this.price));
    };
    PriceQuoteComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.myInterval);
        this.isIntervalStop = true;
    };
    return PriceQuoteComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])('priceChange'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], PriceQuoteComponent.prototype, "lastPrice", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])('buyIt'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _b || Object)
], PriceQuoteComponent.prototype, "buy", void 0);
PriceQuoteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-price-quote',
        template: __webpack_require__(249),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [])
], PriceQuoteComponent);

var PriceQuote = (function () {
    function PriceQuote(stockCode, lastPrice) {
        this.stockCode = stockCode;
        this.lastPrice = lastPrice;
    }
    return PriceQuote;
}());

var _a, _b;
//# sourceMappingURL=price-quote.component.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggerService = (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function (message) {
        console.log(message);
    };
    return LoggerService;
}());
LoggerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LoggerService);

//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Child2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Child2Component = (function () {
    function Child2Component() {
    }
    Child2Component.prototype.ngAfterViewInit = function () {
        console.log("子组件的视图初始化完毕");
    };
    Child2Component.prototype.ngAfterViewChecked = function () {
        //  console.log("子组件的视图变更检测完毕");
    };
    Child2Component.prototype.ngOnInit = function () {
    };
    Child2Component.prototype.greeting = function (name) {
        console.log("hello" + name);
    };
    return Child2Component;
}());
Child2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-child2',
        template: __webpack_require__(241),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [])
], Child2Component);

//# sourceMappingURL=child2.component.js.map

/***/ })

},[520]);
//# sourceMappingURL=main.bundle.js.map