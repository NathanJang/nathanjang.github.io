import Ember from 'ember';
import ProfileLink from '../util/profile-link';

export default Ember.Component.extend({

  profileLinks: Ember.A([
    ProfileLink.create({
      url: 'https://github.com/NathanJang',
      ariaLabel: 'GitHub Profile',
      icon: 'assets/github-icon.png',
      altText: 'GitHub Icon',
      username: 'NathanJang'
    }),
    ProfileLink.create({
      url: 'https://linkedin.com/in/jonathanchanyc',
      ariaLabel: 'LinkedIn Profile',
      icon: 'assets/linkedin-icon.png',
      altText: 'LinkedIn Icon',
      username: 'jonathanchanyc'
    }),
    ProfileLink.create({
      url: 'https://itunes.apple.com/us/developer/yik-chun-jonathan-chan/id1219875691',
      ariaLabel: 'App Store Profile',
      icon: 'assets/app-store-icon.png',
      altText: 'App Store Icon',
      username: 'Jonathan Chan'
    })
  ])

});
