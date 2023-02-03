import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function expireMonthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const monthRange: String[] = [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
    ];
    const value = control.value;

    if (!value) {
      return null;
    }

    const mathMonthList = monthRange.find((m) => m === value);

    return !mathMonthList ? { expireMonthRage: true } : null;
  };
}
