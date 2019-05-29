import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private order: ElementFinder;

  constructor () {
    this.order = $('#center_column > div > p > strong');
  }

  public async getSummary():Promise<String> {
    return this.order.getText();
  }
}
