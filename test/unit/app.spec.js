import { App } from '../../src/app';
import 'aurelia-polyfills';
import { StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { PLATFORM } from 'aurelia-pal';

const view = `
  <testerino message.bind="message"></testerino>
`;

const bindings = {
  message: 'Helloo'
};

fdescribe('the app', () => {
  let component;
  beforeEach(() => {
    component = StageComponent.withResources(PLATFORM.moduleName('testerino/testerino.html') && PLATFORM.moduleName('testerino/testerino'))
      .inView(view)
      .boundTo(bindings);
  });

  afterEach(() => {
    component.dispose();
  });

  it('says hello', async () => {
    await component.create(bootstrap);
    expect(new App().message).toBe('Hello World!');
  });

  it('Should bind message in view', async () => {
    await component.create(bootstrap);
    const tt = document.querySelector('#testerino');
    expect(tt.querySelector('#text').textContent.trim()).toBe('Helloo');
  });
});

