import Ember from 'ember';

export default Ember.Object.extend({
  title: '',
  description: '',
  iconPath: '',
  shouldMaskIcon: false,
  iconAltText: '',
  linkTitleText: '',
  href: ''
});
