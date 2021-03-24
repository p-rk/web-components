import { newSpecPage } from '@stencil/core/testing';
import { GtaDialog } from '../gta-dialog';

describe('gta-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GtaDialog],
      html: `<gta-dialog></gta-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <gta-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gta-dialog>
    `);
  });
});
