import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;

  it('testing name variable', () => {
    component = new TestComponent();
    expect(component.name).toBe('Anchal');
  });
});
