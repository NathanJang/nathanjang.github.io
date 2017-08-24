import Ember from 'ember';

export default Ember.Mixin.create({
  activate() {
    this._super();
    scrollTo(0, 0);
  }
});
