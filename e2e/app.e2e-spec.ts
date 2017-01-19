import { MtlinspirePage } from './app.po';

describe('mtlinspire App', function() {
  let page: MtlinspirePage;

  beforeEach(() => {
    page = new MtlinspirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
