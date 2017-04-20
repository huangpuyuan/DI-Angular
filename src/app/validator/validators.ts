import {FormControl, FormGroup} from "@angular/forms";

/**
 * Created by Administrator on 2017/4/20.
 */

export function mobileValidator(control: FormControl): any {
  // language=JSRegexp
  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = myreg.test(control.value);
  console.log("mobile的校验结果是：" + valid);
  return valid ? null : {mobile: true};
}

export function equalValidator(group: FormGroup): any {
  let password: FormControl = group.get("password") as FormControl;
  let pconfirm: FormControl = group.get("pconfirm") as FormControl;
  let valid: boolean = (password.value === pconfirm.value);
  console.log("密码校验结果： " + valid);
  return valid ? null : {equal: {errorMes:'密码和确认密码不匹配'}};
}
