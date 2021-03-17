import { Component, h } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {


  public details = {
    name: 'Rama Krishna Putta',
    email: 'raputta@microsoft.com'
  }
  render() {
    return (
      <h1>This is another component (my-component)</h1>
    )
  }
}
