import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { REGEX_CONFIG } from './app.config';
import { expireMonthValidator } from './validators/expire-month.validator';
import { expireYearValidator } from './validators/expire-year.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  reactiveForm!: FormGroup;

  constructor() {}
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(16),
        Validators.pattern(REGEX_CONFIG.NUMBER_REGEX),
      ]),
      cardHolderName: new FormControl('', [
        Validators.required,
        Validators.pattern(REGEX_CONFIG.LETER_REGEX),
      ]),
      expireMonth: new FormControl('', [
        Validators.required,
        expireMonthValidator(),
        Validators.minLength(2),
      ]),
      expireYear: new FormControl('', [
        Validators.required,
        expireYearValidator(),
        Validators.minLength(4),
      ]),
      cvvNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(REGEX_CONFIG.NUMBER_REGEX),
        Validators.minLength(3),
      ]),
    });
  }

  get cardNumber() {
    return this.reactiveForm.get('cardNumber')!.value;
  }

  get cardHolderName() {
    return this.reactiveForm.get('cardHolderName')!.value;
  }

  get expireDate() {
    if (
      this.reactiveForm.get('expireMonth')!.value &&
      this.reactiveForm.get('expireYear')!.value
    ) {
      return `${this.reactiveForm.get('expireMonth')!.value}/${
        this.reactiveForm.get('expireYear')!.value
      }`;
    } else {
      return '';
    }
  }
}
