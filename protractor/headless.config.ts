import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeoutgetPageTimeout: 1000,
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  },
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu']
    }
  }
};
