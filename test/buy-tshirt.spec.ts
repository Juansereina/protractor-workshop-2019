import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderSummaryPage
} from '../src/page/';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const ahippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.productHover();
    await(browser.sleep(1000));
    await productListPage.addToCart();
    await(browser.sleep(3000));
    await productAddedModalPage.open();
    await(browser.sleep(3000));
    await summaryStepPage.checkout();
    await(browser.sleep(3000));
    await signInStepPage.signIn();
    await(browser.sleep(3000));
    await addressStepPage.proceed();
    await(browser.sleep(3000));
    await ahippingStepPage.acceptAndContinue();
    await(browser.sleep(3000));
    await paymentStepPage.pay();
    await(browser.sleep(3000));
    await bankPaymentPage.confirm();
    await(browser.sleep(3000));
    await expect(orderSummaryPage.getSummary())
    .toBe('Your order on My Store is complete.');
  });
});
