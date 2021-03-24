import { MDCDialog } from '@material/dialog';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Prop,
  Watch,
  h,
  State,
} from '@stencil/core';
import { stringParser } from '../../utils/utils'

@Component({
  tag: 'gta-dialog',
  styleUrl: 'gta-dialog.scss',
  shadow: true,
})
export class Dialog implements ComponentInterface {
  private mdcDialog: MDCDialog;

  @Element() el!: HTMLElement;

  @Prop() headerTitle: string;

  @Prop() isOpen: boolean = false;
  @Watch('isOpen')
  isOpenChange(newVal: boolean) {
    if (newVal) {
      this.mdcDialog.open();
    } else {
      this.mdcDialog.close();
    }
  }

  @Prop() buttons: string;
  @State() _buttons: Array<any>;

  @Event() openChange!: EventEmitter;

  componentDidLoad() {
    this.mdcDialog = new MDCDialog(
      this.el.shadowRoot.querySelector('.mdc-dialog')
    );

    this.el.addEventListener('MDCDialog:opened', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.openChange.emit(true);
    });
    this.el.addEventListener('MDCDialog:closed', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.openChange.emit(false);
    });
    if (this.isOpen) {
      this.mdcDialog.open();
    }

    this._buttons = stringParser(this.buttons)
  }

  disconnectedCallback() {
    this.mdcDialog?.destroy();
  }

  handleDialog() {
    this.openChange.emit(false)
    this.mdcDialog.close()
  }

  render() {
    return (
      <div class="mdc-dialog">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="my-dialog-title"
          aria-describedby="my-dialog-content">
            <div class="mdc-dialog__title">
              {this.headerTitle}
            </div>
          <div class="mdc-dialog__content" id="my-dialog-content">
            <slot name="content" />
          </div>
          <div class="mdc-dialog__actions">
            {this._buttons?.map(btn => (
              <gta-button btnName="Close" data-mdc-dialog-button-default onClick={() => this.handleDialog()}>{btn?.name}</gta-button>
            ))}
        </div>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>
    );
  }
}