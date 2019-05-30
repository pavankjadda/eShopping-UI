import {AppPage} from './app.po';
import { browser, logging, by, element } from 'protractor';


describe('Login as Admin', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should login than see homepage', () => {
    page.navigateTo();
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('admin');
    element(by.css('button')).click();
    expect( page.getTitleText() ).toEqual( 'Home' );
  });
});
