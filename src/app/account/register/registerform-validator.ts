import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export function usernameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    let usernamePattern=/^[0-9a-zA-Z0-9]+$/;
    if (control.value !== undefined && (isNaN(control.value)) &&   !usernamePattern.test(control.value))
    {
      return {usernameInvalidCharacters: true};
    }
    return null;
  };
}


export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    let passwordPattern=/^[0-9@#$&%!a-zA-Z0-9]+$/;
    if (control.value !== undefined && (isNaN(control.value))&&   !passwordPattern.test(control.value))
    {
      return {passwordInvalidCharacters: true};
    }
    return null;
  };
}



export function confirmPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    let confirmPasswordPattern=/^[0-9@#$&%!a-zA-Z0-9]+$/;
    if (control.value !== undefined && (isNaN(control.value)) &&   !confirmPasswordPattern.test(control.value))
    {
      return {passwordConfirmInvalidCharacters: true};
    }
    return null;
  };
}


export const matchPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password && confirmPassword && password.value === confirmPassword.value ? { passwordsMatched: true } : null;
};


