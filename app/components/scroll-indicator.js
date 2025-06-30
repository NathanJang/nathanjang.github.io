import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ScrollIndicatorComponent extends Component {
  @action
  click() {
    console.log(this.args.classToScrollTo);
    window.document
      .getElementsByClassName(this.args.classToScrollTo)[0]
      .scrollIntoView();
  }
}
