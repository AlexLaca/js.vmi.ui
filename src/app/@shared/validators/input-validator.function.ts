import {AbstractControl, ValidatorFn} from '@angular/forms';

export function pncValidatorFn(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return true ? null : {'vmi-pnc-input.invalid-pnc' : {value:control.value}};
  };
}
