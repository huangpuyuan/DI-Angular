///<reference path="../validator/validators.ts"/>
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {equalValidator, mobileAsyncValidator, mobileValidator} from "../validator/validators";

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {
  // 校验器
  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    // this.formModel = new FormGroup({
    //   username: new FormControl(),
    //   mobile: new FormControl(),
    //   passwordsGroup: new FormGroup({
    //     password: new FormControl(),
    //     pconfirm: new FormControl()
    //   }),
    //   checked:new FormControl()
    // });

    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordsGroup: fb.group({
        password: ['', [Validators.minLength(6)]],
        pconfirm: ['']
      }, {validator: equalValidator}),
      checked: ['', [Validators.requiredTrue]]
    });
  }

  onSubmit() {
    // Angular 提供的标准的校验器
    // let isValid: boolean = this.formModel.get("username").valid;
    // console.log("username的校验结果：" + isValid);
    // let errors: any = this.formModel.get("username").errors;
    // console.log("username的错误信息：" + JSON.stringify(errors));

    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

  ngOnInit() {
  }

}
