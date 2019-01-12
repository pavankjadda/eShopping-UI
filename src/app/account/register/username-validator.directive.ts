import {AbstractControl, ValidatorFn} from '@angular/forms';

export function usernameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value !== undefined && (isNaN(control.value) || control.value.length <6))
    {
      return {insufficientLength: true};
    }
    return null;
  };
}














/*
export function customValidator(control: AbstractControl)
{
  if (control.value !== undefined && (isNaN(control.value) || control.value.length <6))
  {
    return { insufficientLength: true };
  }
  return null;
}*/
