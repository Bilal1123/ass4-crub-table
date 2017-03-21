import { Ass4CrubTablePage } from './app.po';

describe('ass4-crub-table App', () => {
  let page: Ass4CrubTablePage;

  beforeEach(() => {
    page = new Ass4CrubTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
