import { TrainPage } from './app.po';

describe('train App', () => {
  let page: TrainPage;

  beforeEach(() => {
    page = new TrainPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
