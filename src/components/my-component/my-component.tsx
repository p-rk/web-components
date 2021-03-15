import { Component, h, Host } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  render() {
    return (
      <Host>
        <div>This is another component</div>
      </Host>
    )
  }
}
