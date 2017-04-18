webpackJsonp([1,5],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".title{\r\n  margin-top: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".a{\r\n  background: yellow;\r\n}\r\n.b{\r\n  color:red;\r\n}\r\n.c{\r\n  font-size: 20px;\r\n}\r\n.row > div{\r\n  border: 1px solid #ccc;\r\n  border-bottom: none;\r\n  padding: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "h3{\r\n  margin: 5px 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <h2 class=\"page-header title\">\n      <small>基本依赖注入和数据绑定例子</small>\n    </h2>\n  </div>\n  <div class=\"panel-group\" id=\"accordion\" aria-multiselectable=\"true\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" id=\"headingOne\">\n        <h4 class=\"panel-title\">\n            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\"\n             aria-expanded=\"true\" aria-controls=\"collapseOne\">依赖注入</a>\n        </h4>\n      </div>\n      <div id=\"collapseOne\" class=\"panel-collapse collapse\" aria-labelledby=\"headingOne\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <app-product1></app-product1>\n            <app-product2></app-product2>\n          </div>\n        </div>\n      </div>\n    </div>\n    <app-bind></app-bind>\n  </div>\n</div>\n"

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-success\">\n  <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n    <h4 class=\"panel-title\">\n      <a class=\"collapsed\"  data-toggle=\"collapse\" data-parent=\"#accordion\"  href=\"#collapseTwo\" aria-expanded=\"true\"\n         aria-controls=\"collapseTwo\">数据绑定</a>\n    </h4>\n  </div>\n  <div id=\"collapseTwo\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n    <div class=\"panel-body\">\n      <span>Angular里面的事件绑定： </span>\n      <button class=\"btn btn-default\" (click)=\"doOnClick($event)\">点我</button>\n      <hr>\n      <p>注意点1：<b>差值表达式</b>和<b>属性绑定</b>是相同的东西。如下示例</p>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <p>属性绑定1: <code>&lt;img [src]=\"imgUrl\" /&gt;</code></p>\n          <img [src]=\"imgUrl\"/>\n        </div>\n        <div class=\"col-md-4\">\n          <p>属性绑定2: <code> &lt;img src=<span>\"{{</span>imgUrl<span>}}\"</span>/&gt;</code></p>\n          <img src=\"{{imgUrl}}\"/>\n        </div>\n        <div class=\"col-md-4\">\n          <p>数据绑定3：html属性和DOM属性</p>\n          <input value=\"Tom\" (input)=\"doInput($event)\">\n          <button class=\"btn btn-default\" disabled>点我</button>\n          <hr>\n          <p>html属性和DOM属性的区别，模板绑定是通过DOM属性和事件来工作的不是HTML属性</p>\n          <p>插值表达式是DOM属性绑定</p>\n        </div>\n        <div class=\"col-md-6\">\n          <p>数据绑定4：<br>HTML属性绑定: <code>[attr.colspan]=\"tableColspan\"</code></p>\n          <p>CSS类绑定：<code>[class] [class.specail] [ngClass]=\"{{ '{' }}aaa:isA,bbb:isB{{ '}' }}\"</code></p>\n          <p>样式属性绑定：<code> [style.specail]=\"isSpecial?'red':'green'\" </code><br/>\n            <code>[ngStyle]=\"{{ '{' }}'font-style':this.canSave?'italic':'normal'{{ '}' }}\"</code></p>\n        </div>\n        <div class=\"col-md-6\">\n          <table class=\"table table-striped\">\n            <tr>\n              <td [attr.colspan]=\"size\">January</td>\n              <td>ABC</td>\n            </tr>\n            <tr>\n              <td colspan=\"2\">February</td>\n              <td>March</td>\n            </tr>\n            <tr>\n              <td colspan=\"1\">March</td>\n              <td>April</td>\n            </tr>\n          </table>\n        </div>\n        <div class=\"col-md-6\">\n          <p>html属性绑定：样式绑定</p>\n          <div [class]=\"divClass\">测试1</div>\n          <div class=\"a b \" [class.c]=\"isBig\">测试2</div>\n          <div [ngClass]=\"anotherDivClass\">测试3</div>\n        </div>\n        <div class=\"col-md-6\">\n          <p>html属性绑定：样式绑定</p>\n          <div [style.color]=\"isDev?'red':'blue'\">样式绑定</div>\n          <div [style.font-size.em]=\"isDev?3:1\">样式绑定2</div>\n          <div [ngStyle]=\"divStyle\">样式绑定3</div>\n        </div>\n        <div class=\"col-md-6\">\n          <p>双向数据绑定：</p>\n          <div class=\"form-inline\">\n            <div class=\"form-group\">\n              <input id=\"input1\" class=\"form-control\" [value]=\"name\" (input)=\"doOnInput($event)\">\n              <label for=\"input1\">{{name}}</label>\n            </div>\n            <div class=\"form-group\">\n              <input id=\"input2\" class=\"form-control\" [(ngModel)]=\"name\">\n              <label for=\"input2\">{{name}}</label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3\">\n<h3><small>商品详情1:</small></h3>\n<p>名称：{{product.title}}</p>\n<p>价格：{{product.price}}</p>\n<p>描述：{{product.desc}}</p>\n</div>\n"

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3\">\n  <h3><small>商品详情2:</small></h3>\n  <p>名称：{{product.title}}</p>\n  <p>价格：{{product.price}}</p>\n  <p>描述：{{product.desc}}</p>\n</div>\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(75);


/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger_service__ = __webpack_require__(30);
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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

/***/ 74:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 74;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(91);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(154),
        styles: [__webpack_require__(146)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product1_product1_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_product_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product2_product2_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_logger_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_another_product_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bind_bind_component__ = __webpack_require__(87);
/* unused harmony export myFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











function myFactory(logger, appConfig) {
    if (appConfig.isDev) {
        return new __WEBPACK_IMPORTED_MODULE_6__shared_product_service__["a" /* ProductService */](logger);
    }
    else {
        return new __WEBPACK_IMPORTED_MODULE_9__shared_another_product_service__["a" /* AnotherProductService */](logger);
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
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__product1_product1_component__["a" /* Product1Component */],
            __WEBPACK_IMPORTED_MODULE_7__product2_product2_component__["a" /* Product2Component */],
            __WEBPACK_IMPORTED_MODULE_10__bind_bind_component__["a" /* BindComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_6__shared_product_service__["a" /* ProductService */],
                useFactory: myFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_8__shared_logger_service__["a" /* LoggerService */], "APP_CONFIG"]
            }, __WEBPACK_IMPORTED_MODULE_8__shared_logger_service__["a" /* LoggerService */],
            {
                provide: "APP_CONFIG", useValue: { isDev: false }
            }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
    return BindComponent;
}());
BindComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-bind',
        template: __webpack_require__(155),
        styles: [__webpack_require__(147)]
    }),
    __metadata("design:paramtypes", [])
], BindComponent);

//# sourceMappingURL=bind.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__(22);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-product1',
        template: __webpack_require__(156),
        styles: [__webpack_require__(148)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], Product1Component);

var _a;
//# sourceMappingURL=product1.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__(22);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-product2',
        template: __webpack_require__(157),
        styles: [__webpack_require__(149)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Injector */]) === "function" && _a || Object])
], Product2Component);

var _a;
//# sourceMappingURL=product2.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_product_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_service__ = __webpack_require__(30);
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

/***/ 91:
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

/***/ })

},[185]);
//# sourceMappingURL=main.bundle.js.map