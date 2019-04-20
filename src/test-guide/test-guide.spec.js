import { TestGuide } from './test-guide';
import { StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { PLATFORM } from 'aurelia-pal';

let component;
let element;
let viewModel;

function create({ bindings } = {}) {
  return component
    .inView('<test-guide message.bind="message"></test-guide>')
    .boundTo(bindings)
    .create(bootstrap)
    .then(() => {
      ({ element, viewModel } = component)
    });
}

describe('TEST GUIDE -- View Model', () => {
  beforeEach(() => {
    component = StageComponent
      .withResources(PLATFORM.moduleName('test-guide/test-guide'))
      .inView('<test-guide></test-guide>')
  });
  afterEach(() => {
    component.dispose();
  });

  it('Should display correct message in the view', async () => {
    await create();
    const { message } = new TestGuide();
    expect(message).toBe('TestGuide');
  });

  it('Should call Class methods', async () => {
    await create();
    spyOn(viewModel, 'secCaller');
    viewModel.mainCaller();
    expect(viewModel.secCaller).toHaveBeenCalled();
  });

  describe('SUB COMPONENT', () => {
    it('Should call #setColor from `.call=setColor()`', async () => {
      await create();
      const colorButton = element.querySelector('[data-test=set-color]');
      spyOn(viewModel, 'setColor');
      colorButton.click();
      expect(viewModel.setColor).toHaveBeenCalled();
    });


    it('Should call inner method from `.bind=setImage`', async () => {
      await create();
      const imageButton = element.querySelector('[data-test=set-image]');
      spyOn(viewModel, 'secCaller');
      imageButton.click();
      expect(viewModel.secCaller).toHaveBeenCalled();
    });
  });

});

describe('TEST GUIDE -- View', () => {
  beforeEach(() => {
    component = StageComponent
      .withResources(PLATFORM.moduleName('test-guide/test-guide'))
      .inView('<test-guide></test-guide>')
  });
  afterEach(() => {
    component.dispose();
  });

  it('Should display correct message', async () => {
    const message = 'Hello World'
    await create({ bindings: { message } });
    const hOne = element.querySelector('h1');
    expect(hOne.textContent).toBe(message);
  });

  it('Should bind `message` correctly ', async () => {
    const message = 'Hello World'
    await create({ bindings: { message } });
    const hOne = element.querySelector('h1');
    expect(hOne.textContent).toBe(message);
  });

  it('Should call `secCaller` after button was clicked', async () => {
    await create();
    const button = element.querySelector('[data-test=main-caller-button]');
    spyOn(viewModel, 'secCaller');
    button.click();
    expect(viewModel.secCaller).toHaveBeenCalled();
  });
});
