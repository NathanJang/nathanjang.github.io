import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import ProfileLink from '../util/profile-link';
import links from '../util/links';

export default class ProfilePage extends Component {
  profilePictureSrcs = [
    '/assets/profile-picture-0.jpg',
    '/assets/profile-picture-1.jpg',
    '/assets/profile-picture-2.jpg',
    '/assets/profile-picture-3.jpg',
  ];

  @tracked
  currentProfilePictureIndex = 0;

  get currentProfilePictureSrc() {
    return this.profilePictureSrcs[this.currentProfilePictureIndex];
  }

  @action
  handleProfilePictureClick() {
    this.currentProfilePictureIndex =
      (this.currentProfilePictureIndex + 1) % this.profilePictureSrcs.length;
  }

  profileLinks = [
    new ProfileLink({
      url: links.resume,
      ariaLabel: 'Resume',
      icon: '/assets/resume-icon.svg',
      altText: 'Resume Icon',
      username: 'Resume',
    }),
    // ProfileLink.create({
    //   url: links.github,
    //   ariaLabel: 'GitHub Profile',
    //   icon: '/assets/github-icon.png',
    //   altText: 'GitHub Icon',
    //   username: 'NathanJang'
    // }),
    new ProfileLink({
      url: links.linkedin,
      ariaLabel: 'LinkedIn Profile',
      icon: '/assets/linkedin-icon.png',
      altText: 'LinkedIn Icon',
      username: 'LinkedIn',
    }),
    // ProfileLink.create({
    //   url: links.appStore,
    //   ariaLabel: 'App Store Profile',
    //   icon: '/assets/app-store-icon.png',
    //   altText: 'App Store Icon',
    //   username: 'Jonathan Chan'
    // })
  ];
}
