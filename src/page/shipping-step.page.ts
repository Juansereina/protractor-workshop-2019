import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private acceptButton: ElementFinder;
  private continueButton: ElementFinder;

  constructor () {
    this.acceptButton = $('#cgv');
    this.continueButton = $('#form > p > button > span');
  }

  public async acceptAndContinue(): Promise<void> {
    await this.acceptButton.click();
    await this.continueButton.click();
  }
}
