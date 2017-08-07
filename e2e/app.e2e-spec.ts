import { AfternoonChallengePage } from './app.po';

describe('afternoon-challenge App', () => {
  let page: AfternoonChallengePage;

  beforeEach(() => {
    page = new AfternoonChallengePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
