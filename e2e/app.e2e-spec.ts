import { AngularCoursePage } from './app.po';

describe('angular-course App', () => {
  let page: AngularCoursePage;

  beforeEach(() => {
    page = new AngularCoursePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
