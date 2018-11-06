import Ember from 'ember';
import ProfileLink from '../util/profile-link';
import links from '../util/links';

export default Ember.Component.extend({

  profilePictureSrcs: Ember.A(['/assets/profile-picture.jpg', '/assets/profile-picture-secondary.jpg']),

  currentProfilePictureIndex: 0,

  currentProfilePictureSrc: Ember.computed('currentProfilePictureIndex', function () {
    return this.get('profilePictureSrcs')[this.get('currentProfilePictureIndex')]
  }),

  actions: {
    handleProfilePictureClick() {
      this.set('currentProfilePictureIndex', (this.get('currentProfilePictureIndex') + 1) % this.get('profilePictureSrcs.length'))
    }
  },

  classNames: Ember.A(['profile-container', 'containter-fluid']),

  profileLinks: Ember.A([
    ProfileLink.create({
      url: links.github,
      ariaLabel: 'GitHub Profile',
      icon: '/assets/github-icon.png',
      altText: 'GitHub Icon',
      username: 'NathanJang'
    }),
    ProfileLink.create({
      url: links.linkedin,
      ariaLabel: 'LinkedIn Profile',
      icon: '/assets/linkedin-icon.png',
      altText: 'LinkedIn Icon',
      username: 'jonathanchanyc'
    }),
    ProfileLink.create({
      url: links.appStore,
      ariaLabel: 'App Store Profile',
      icon: '/assets/app-store-icon.png',
      altText: 'App Store Icon',
      username: 'Jonathan Chan'
    }),
    ProfileLink.create({
      url: links.resume,
      ariaLabel: 'Resume',
      icon: '/assets/resume-icon.svg',
      altText: 'Resume Icon',
      username: 'Résumé'
    })
  ])

});
