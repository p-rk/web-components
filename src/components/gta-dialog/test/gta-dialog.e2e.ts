import { newE2EPage } from '@stencil/core/testing';

describe('gta-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gta-dialog></gta-dialog>');

    const element = await page.find('gta-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
