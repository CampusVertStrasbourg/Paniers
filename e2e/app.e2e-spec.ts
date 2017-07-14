import { PaniersPage } from './app.po';

describe('paniers App', () => {
  let page: PaniersPage;

  beforeEach(() => {
    page = new PaniersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
