import { browser, element, by } from 'protractor';

export class FrontendbandPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('feb-root h1')).getText();
  }
}
