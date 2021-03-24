import { Component, Host, h, Element } from '@stencil/core';
import {MDCRipple} from '@material/ripple';

@Component({
  tag: 'gta-button',
  styleUrl: 'gta-button.scss',
  shadow: true,
})
export class GtaButton {

  private mdcBtn: MDCRipple;

  @Element() el!: HTMLElement;

  componentDidLoad() {
    this.mdcBtn = new MDCRipple(
      this.el.shadowRoot.querySelector('.mdc-button')
    );
  }

  disconnectedCallback() {
    this.mdcBtn?.destroy();
  }

  render() {
    return (
      <Host>
        <div class="mdc-touch-target-wrapper">
          <button class="mdc-button accessible-button">
            <span class="mdc-button__ripple"></span>
            <span class="mdc-button__label">Close</span>
          </button>
        </div>
      </Host>
    );
  }

}
