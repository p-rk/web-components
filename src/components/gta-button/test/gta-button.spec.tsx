import { newSpecPage } from '@stencil/core/testing';
import { GtaButton } from '../gta-button';

describe('gta-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GtaButton],
      html: `<gta-button></gta-button>`,
    });
    expect(page.root).toEqualHtml(`
      <gta-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gta-button>
    `);
  });
});
