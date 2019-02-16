import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  setUserInputs(){
    // Esses browsers sleeps não são necessários, só coloquei para ficar algo visual para vocês que estão olhando o teste sendo executado.
    // Na prática, remover esses browser sleeps.
    element(by.css('[name="name"]')).sendKeys('Michel');
    browser.sleep(200);
    element(by.css('[name="email"]')).sendKeys('michel@leanwork.com');
    browser.sleep(200);
    element(by.css('[name="cpf"]')).sendKeys(123)
    browser.sleep(200);
    element(by.css('[name="telefone"]')).sendKeys(456);
    browser.sleep(200);
    return
  }
  getRegisterButton() {
    element(by.cssContainingText('button', 'Cadastrar')).click();
    browser.sleep(100);
    element(by.cssContainingText('button', 'Login')).click();
    browser.sleep(1000);
    return
  }
}
