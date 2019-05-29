import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private summaryPage: ElementFinder;

  constructor () {
    this.summaryPage = $('.cart_navigation span');
  }

  public async checkout(): Promise<void> {
    await this.summaryPage.click();
  }
}
