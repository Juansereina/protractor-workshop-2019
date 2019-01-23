import { $, ElementFinder, element, by, browser } from 'protractor';

export class ProductListPage {
  private addToCartButton: ElementFinder;
  private product: ElementFinder;

  constructor () {
    this.addToCartButton = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
    this.product = element(by.css('.product-container .product-image-container'));
  }
  public async productHover(): Promise<void> {
    await browser.actions().mouseMove(this.product).perform();
  }

  public async addToCart(): Promise<void> {
    await this.addToCartButton.click();
  }
}
