import Ember from 'ember';
import ScrollToTop from '../mixins/scroll-to-top';

export default Ember.Route.extend(ScrollToTop, {

  actions: {
    didTransition() {
      this._super(...arguments);
      document.title = 'Redeye — Jonathan Chan'
      Ember.$(window).on('focus', null, null, event => {
        this.set('onFocusEvent', event);
        if (this.get('timer')) { this.clearUpdateInterval(); }
        this.setUpdateInterval();
      });
      this.setUpdateInterval();
    },

    willTransition() {
      this._super(...arguments);
      Ember.$(window).off(this.get('onFocusEvent'));
      this.set('onFocusEvent', null);
    }
  },

  timer: null,
  onFocusEvent: null,

  setUpdateInterval() {
    Ember.Logger.debug('setUpdateInterval called');
    this.setControllerDate()
    this.set('timer', setInterval(() => this.setControllerDate(), 60 * 1000));
  },

  clearUpdateInterval() {
    clearInterval(this.get('timer'));
    this.set('timer', null);
  },

  setControllerDate() {
    this.get('controller').setDate();
  }

});
