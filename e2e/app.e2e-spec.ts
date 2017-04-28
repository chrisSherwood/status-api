import { StatusApiPage } from './app.po';

describe('status-api App', () => {
  let page: StatusApiPage;

  beforeEach(() => {
    page = new StatusApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
