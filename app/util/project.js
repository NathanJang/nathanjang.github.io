import Ember from 'ember';

export default Ember.Object.extend({
  title: '',
  caption: null,
  description: '',
  iconPath: '',
  shouldMaskIcon: false,
  iconAltText: '',
  linkTitleText: '',
  href: '',
  action: ''
});
