import Ember from 'ember';

export default Ember.Component.extend({
  classNames: Ember.A(['scroll-indicator', 'col-12', 'text-center', 'no-select']),
  attributeBindings: Ember.A(['ariaHidden:aria-hidden']),
  ariaHidden: 'true'
});
