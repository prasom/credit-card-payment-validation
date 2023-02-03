import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card-view',
  templateUrl: './credit-card-view.component.html',
  styleUrls: ['./credit-card-view.component.scss'],
})
export class CreditCardViewComponent {
  @Input() cardNumber: string = '';
  @Input() expireDate: string = '';
  @Input() cardHolderName: string = '';
}
