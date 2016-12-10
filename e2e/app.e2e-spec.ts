import { FrontendbandPage } from './app.po';

describe('frontendband App', function() {
  let page: FrontendbandPage;

  beforeEach(() => {
    page = new FrontendbandPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('feb works!');
  });
});
