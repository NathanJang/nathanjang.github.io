import Ember from 'ember';
import Project from '../helpers/project';

export default Ember.Component.extend({

  projects: Ember.A([
    Project.create({
      title: 'MeowlWatch',
      description: 'An iOS app to help Northwestern Students get the most out of their meal plan.',
      iconPath: 'assets/meowlwatch-logo.png',
      iconAltText: 'MeowlWatch Logo',
      href: 'https://itunes.apple.com/us/app/meowlwatch-for-northwestern-university-dining/id1219875692?mt=8'
    }),
    Project.create({
      title: '.dev',
      description: 'Software Dev Director and Co-Founder of a new club at Northwestern for software devs to connect and make cool stuff.',
      iconPath: 'assets/dotdev-icon.png',
      iconAltText: '.dev Logo',
      href: 'https://northwestern.campuslabs.com/engage/organization/dotdev'
    }),
    Project.create({
      title: 'Wildhacks',
      description: Ember.String.htmlSafe('Software Dev for the Wildhacks team at <a href="https://nuisepic.org" target="_blank">Northwestern Entrepreneurs In Action (EPIC)</a> to plan an awesome hackathon.'),
      iconPath: 'assets/wildhacks-wordmark.svg',
      iconAltText: 'Wildhacks',
      href: 'http://wildhacks.org'
    }),
  ])

});
