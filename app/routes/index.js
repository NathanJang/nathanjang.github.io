import Ember from 'ember';
import ScrollToTop from '../mixins/scroll-to-top';

export default Ember.Route.extend(ScrollToTop, {
  actions: {
    didTransition() {
      this._super(...arguments);
      document.title = 'Jonathan Chan'
    }
  }
});
