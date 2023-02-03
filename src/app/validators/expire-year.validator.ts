import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function expireYearValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const currentyear = new Date().getFullYear();
    const value = control.value;

    if (!value) {
      return null;
    }

    const yearDiff = value - currentyear;

    return yearDiff < 0 || yearDiff > 3 ? { expireYearRage: true } : null;
  };
}
