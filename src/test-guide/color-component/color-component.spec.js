import { ColorComponent } from './color-component';
import { StageComponent } from 'aurelia-testing';
import { PLATFORM } from 'aurelia-pal';
import { bootstrap } from 'aurelia-bootstrapper';

const view = `
  <color-component color.bind="color"></color-component>
`;
const bindings = {
  color: 'blue'
}

describe('the color component', async () => {
  let component;

  beforeEach(() => {
    component = StageComponent.withResources(
      PLATFORM.moduleName('test-guide/color-component/color-component')
      && PLATFORM.moduleName('test-guide/color-component/color-component.html')
    )
      // component = StageComponent.withResources('testguide/color-component/color-component')
      // component = StageComponent.withResources(PLATFORM.moduleName('color-component/color-component'))
      .inView(view)
      .boundTo(bindings);
  });
  afterEach(() => {
    component.dispose();
  });

  // it('says hello', () => {
  //   expect(new ColorComponent().message).toBe('Hello World!');
  // });

  it('Should display color', async () => {
    try {
      await component.create(bootstrap);
      const { element } = component;

    } catch (e) {
      console.error(e)
    }

  });
});

