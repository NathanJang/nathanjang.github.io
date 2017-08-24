import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'a',

  classNameBindings: Ember.A(['additionalClassNamesFromProject']),

  additionalClassNamesFromProject: Ember.computed(function () {
    return !this.get('projectCardShouldBeFullWidth') ? 'col-lg-6' : '';
  }),

  attributeBindings: Ember.A(['href', 'targetIfRequired:target']),

  href: Ember.computed('project', function () {
    return this.get('project.href');
  }),

  targetIfRequired: Ember.computed('href', function () {
    if (!this.get('href')) { return ''; }
    return '_blank';
  }),

  click(event) {
    this._super(...arguments);
    if (!this.get('href')) {
      event.preventDefault();
      this.get('project.action')();
    }
  }

});
