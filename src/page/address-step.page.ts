import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private addressButton: ElementFinder;

  constructor () {
    this.addressButton = $('#center_column > form > p > button > span');
  }

  public async proceed(): Promise<void> {
    await this.addressButton.click();
  }
}
