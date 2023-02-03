import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { render, screen, fireEvent } from '@testing-library/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditCardViewComponent } from './components/credit-card-view/credit-card-view.component';
import userEvent from '@testing-library/user-event';
describe('AppComponent', () => {
  it('Should Show Card Number Invalid Message', async () => {
    const { fixture } = await render(AppComponent, {
      declarations: [AppComponent, CreditCardViewComponent],
      imports: [FormsModule, ReactiveFormsModule],
    });
    const cardNumber = screen.getByTestId('number-input');
    userEvent.type(cardNumber, '12');
    fireEvent.blur(cardNumber);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const errors = screen.getByTestId('number-input-error');
      const errorMessage = errors.textContent?.trim();
      expect(errorMessage).toEqual('Invalid Card Number');
    });
  });

  it('Should Show Card Holder Name Invalid Message', async () => {
    const { fixture } = await render(AppComponent, {
      declarations: [AppComponent, CreditCardViewComponent],
      imports: [FormsModule, ReactiveFormsModule],
    });
    const cardHolder = screen.getByTestId('name-input');
    userEvent.type(cardHolder, 'ABC 123');
    fireEvent.blur(cardHolder);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const errors = screen.getByTestId('name-input-error');
      const errorMessage = errors.textContent?.trim();
      expect(errorMessage).toEqual('Invalid Cardholder Name');
    });
  });

  it('Should Show Expire Month Invalid Message', async () => {
    const { fixture } = await render(AppComponent, {
      declarations: [AppComponent, CreditCardViewComponent],
      imports: [FormsModule, ReactiveFormsModule],
    });
    const expireMonth = screen.getByTestId('month-input');
    userEvent.type(expireMonth, '99');
    fireEvent.blur(expireMonth);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const errors = screen.getByTestId('month-input-error');
      const errorMessage = errors.textContent?.trim();
      expect(errorMessage).toEqual('Invalid Month');
    });
  });

  it('Should Show Expire Year Invalid Message', async () => {
    const { fixture } = await render(AppComponent, {
      declarations: [AppComponent, CreditCardViewComponent],
      imports: [FormsModule, ReactiveFormsModule],
    });
    const expireYear = screen.getByTestId('year-input');
    userEvent.type(expireYear, '12');
    fireEvent.blur(expireYear);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const errors = screen.getByTestId('year-input-error');
      const errorMessage = errors.textContent?.trim();
      expect(errorMessage).toEqual('Invalid Year');
    });
  });

  it('Should Show CVV Invalid Message', async () => {
    const { fixture } = await render(AppComponent, {
      declarations: [AppComponent, CreditCardViewComponent],
      imports: [FormsModule, ReactiveFormsModule],
    });
    const cvv = screen.getByTestId('cvv-input');
    userEvent.type(cvv, '12');
    fireEvent.blur(cvv);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const errors = screen.getByTestId('cvv-input-error');
      const errorMessage = errors.textContent?.trim();
      expect(errorMessage).toEqual('Invalid CVV/CVC');
    });
  });

  it('Should Pass Form Validtion', async () => {
    const { fixture } = await render(AppComponent, {
      declarations: [AppComponent, CreditCardViewComponent],
      imports: [FormsModule, ReactiveFormsModule],
    });
    const cardNumber = screen.getByTestId('number-input');
    userEvent.type(cardNumber, '4417708212345678');
    fireEvent.blur(cardNumber);

    const cardHolder = screen.getByTestId('name-input');
    userEvent.type(cardHolder, 'JOHN DOE');
    fireEvent.blur(cardHolder);

    const expireMonth = screen.getByTestId('month-input');
    userEvent.type(expireMonth, '12');
    fireEvent.blur(expireMonth);

    const expireYear = screen.getByTestId('year-input');
    userEvent.type(expireYear, '2024');
    fireEvent.blur(expireYear);

    const cvv = screen.getByTestId('cvv-input');
    userEvent.type(cvv, '123');
    fireEvent.blur(cvv);

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const button = screen.getByTestId('submit-button');
      expect(button).toBeDefined()
    });
  });
});
