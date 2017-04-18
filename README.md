# Di

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
###　Angular 依赖注入（DI）
> 依赖注入 Dependency Injection(DI)的优势 
> 控制反转 Inversion of Control(IOC)
* 松耦合
```typescript
  @NgMoule({
    providers:[Product],
    // providers:[{provide:ProductService,useClass:ProductService}]
    // providers:[{provide:ProductService,useClass:AnotherProductService}]
  })
  export class AppModule{}
  @Component({
  
  })
  
  export class ProductComponent{
    product:Product;
    constructor(productService:ProductService){
      this.product = productService.getProduct();
    }
  }
```
 提高可测试性： `LoginComponent` `MockLoginService`(注入) `RealLoginServce`
* 注入器（注入器的层级关系）
  `consreuctor(private productService: ProductService){...}`
	* 应用级注入器
	* 主组件注入器
	* 子组件注入器
	* 组件模块里面只有一种注入模式<构造函数注入>
* 提供器  
  `providers:[ProductService]`
  `providers:[{provide:ProductService,useClass:ProductService}]`(同上)
  `providers:[{provide:ProductService,useClass:AnotherProductService}]`
  `providers:[{provide:ProductService,useFactory:()=>{...}]`
  
  
### Angular 数据绑定
```html
<h1>{{productTitle}}</h1> 
<!--1.使用插值表达式将一个表达式的值显示在模板上-->
<img [src]="imgUrl">
<!--2.使用方括号将HTML标签的一个属性绑定到一个表达式上-->
<button (click)="toProductDetail()">商品详情</button>
<!--3.使用小括号将组件控制器的一个方法绑定为模板上一个事件处理器-->
```
> 在Angular中默认的数据绑定是单向的数据绑定，在Angular1中默认的数据绑定是双向数据绑定，根源在于其对性能的消耗（Angular双向绑定是可选项不在是默认项）

* 事件绑定
```html
<input (input)="onInputEvent($event)">
<!--1.小括号表示这是一个事件绑定 ，里面是事件的名称-->
<!--2.后面跟着的是当事件发生时执行的表达式，前面是组件方法名称后面是浏览器事件对象-->
<button (click)="saved = true"></button>
<!--3.小括号后面的也可以是一个属性赋值 当按钮被点击的时候属性saved的值为true-->
```
* 属性绑定
  * DOM属性绑定
  * HTML属性绑定
    * css类属性绑定
    * 样式属性绑定
* 双向绑定
### 响应式编程RxJs
* 观察者模式与Rxjs（调用和注册）
  * 可观察对象 Observable(流)：
  * 观察者 Observer：
  * 订阅 Subscription：
  * 操作符 Operators：
* 在Angular中引入了一种事件处理的思路，将事件作为一个永不结束的的**流**来处理 
> 你要成为一个真正的Angular的开发者，使用流来处理事件才是
### 管道（格式化） 
* pipe

### 组件件的通讯
> 依赖注入方式　＆　松耦合的方式

* 组件的输入输出属性
  * 输入
  * 输出 
    * RxJs 观察者与被观察者
     
* 使用中间人模式传递数据
* 组件生命周期以及Angular的变化机制


