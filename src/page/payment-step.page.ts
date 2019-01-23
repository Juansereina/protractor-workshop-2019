import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private paymentButton: ElementFinder;

  constructor () {
    this.paymentButton = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async pay(): Promise<void> {
    await this.paymentButton.click();
  }
}
