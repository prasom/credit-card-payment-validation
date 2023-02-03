import 'jest-preset-angular/setup-jest';
import '@testing-library/angular';
import { configure } from '@testing-library/angular';
import { ReactiveFormsModule } from '@angular/forms';

configure({
  defaultImports: [ReactiveFormsModule],
});
