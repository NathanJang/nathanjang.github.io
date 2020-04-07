import Route from '@ember/routing/route';
import ScrollToTop from '../mixins/scroll-to-top';

export default Route.extend(ScrollToTop, {
  actions: {
    didTransition() {
      this._super(...arguments);
      document.title = 'Goodbye, MeowlWatch'
    }
  }
});
