import Ember from 'ember';

export default Ember.Component.extend({

    classNameBindings: Ember.A(['additionalClassNamesFromProject']),

    additionalClassNamesFromProject: Ember.computed(function () {
      return !this.get('projectCardShouldBeFullWidth') ? 'col-lg-6' : '';
    })

});
