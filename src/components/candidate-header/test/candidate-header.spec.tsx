import { newSpecPage } from '@stencil/core/testing';
import { CandidateHeader } from '../candidate-header';

describe('candidate-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CandidateHeader],
      html: `<candidate-header></candidate-header>`,
    });
    expect(page.root).toEqualHtml(`
      <candidate-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </candidate-header>
    `);
  });
});
