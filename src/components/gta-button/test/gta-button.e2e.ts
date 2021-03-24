import { newE2EPage } from '@stencil/core/testing';

describe('gta-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gta-button></gta-button>');

    const element = await page.find('gta-button');
    expect(element).toHaveClass('hydrated');
  });
});
