import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})

export class Child5Component implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log("child5组件被销毁");
  }

  constructor() {
  }

  ngOnInit() {
  }

}
