import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello test {{age}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
  @Input() age: string;
  @Output() details: string="Test the output"
}
