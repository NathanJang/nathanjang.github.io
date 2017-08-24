import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition() {
      document.title = 'Jonathan Chan'
    }
  }
});
