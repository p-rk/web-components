import { newE2EPage } from '@stencil/core/testing';

describe('candidate-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<candidate-header></candidate-header>');

    const element = await page.find('candidate-header');
    expect(element).toHaveClass('hydrated');
  });
});
