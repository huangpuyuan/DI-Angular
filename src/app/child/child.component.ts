import {Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  ngOnDestroy(): void {
    console.log("child组件被销毁");
  }

  @Input()
  greeting: string;

  @Input()
  user: { name: string };

  message = '初始化消息';
  changeDetected: boolean = false;
  oldUsername: string;
  noChangeCount: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

  // 调用ngDoCheck钩子
  checkHandler() {
    if (this.user.name !== this.oldUsername) {
      this.changeDetected = true;
      console.log("DoCheck:user.name" + this.oldUsername + "变为" + this.user.name);
      this.oldUsername = this.user.name;
    }
    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      this.noChangeCount = this.noChangeCount + 1;
      console.log("DoCheck:user.name没变化时ngDoCheck方法已经被调用了" + this.noChangeCount + "次");
    }
    this.changeDetected = false;
  }

  ngDoCheck(): void {
    // this.checkHandler();
  }


}
