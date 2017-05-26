import { CatblockwebPage } from './app.po';

describe('catblockweb App', () => {
  let page: CatblockwebPage;

  beforeEach(() => {
    page = new CatblockwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
