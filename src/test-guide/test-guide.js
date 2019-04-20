import { bindable } from 'aurelia-framework';
import './test-guide.less';

export class TestGuide {
  @bindable message = 'TestGuide';

  bind() {

  }
  mainCaller() {
    console.log("TCL: TestGuide -> mainCaller -> mainCaller")
    this.secCaller();
  }

  secCaller() {
    console.log("TCL: TestGuide -> secCaller -> secCaller")
  }

  setColor() {
    console.log("TCL: TestGuide -> setColor -> setColor")
  }

  setImage = () => {
    console.log("TCL: TestGuide -> setImage -> setImage")
    this.secCaller();
  }

}
