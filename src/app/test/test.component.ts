import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-test',
  template: `{{name}}`,
  styles: [``],
})
export class TestComponent implements OnInit {
  public name: string;

  ngOnInit() {
    this.name = 'Anchal';
  }
}
