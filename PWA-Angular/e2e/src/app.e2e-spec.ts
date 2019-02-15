import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('A tela inicial deve mostrar o nome do lean cadastro', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Lean Cadastro');
  });

  it('Preencher os valores dos usuários, registrar usuário e ir para a tela de lista de usuário ', () => {
    page.setUserInputs();
    page.getRegisterButton();
    browser.getCurrentUrl().then(function(currentUrl){
      expect(currentUrl).toEqual("http://localhost:4200/home");
    })
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
