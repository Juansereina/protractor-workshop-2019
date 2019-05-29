import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private email: ElementFinder;
  private password: ElementFinder;
  private submit: ElementFinder;

  constructor () {
    this.email = $('#email');
    this.password = $('#passwd');
    this.submit = $('#SubmitLogin > span');
  }

  public async signIn(email: string, passwd: string): Promise<void> {
    await this.email.sendKeys(email);
    await this.password.sendKeys(passwd);
    await this.submit.click();
  }
}
