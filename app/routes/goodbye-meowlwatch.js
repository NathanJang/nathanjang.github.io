import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class GoodbyeMeowlwatchRoute extends Route {
  @action
  didTransition() {
    document.title = 'Goodbye, MeowlWatch';
    scrollTo(0, 0);
  }
}
