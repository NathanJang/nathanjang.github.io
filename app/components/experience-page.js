import Ember from 'ember';
import Project from '../util/project';

export default Ember.Component.extend({

  projects: Ember.A([
    Project.create({
      title: 'MeowlWatch',
      description: 'An iOS app to help Northwestern Students get the most out of their meal plan. In talks with Northwestern Dining to make it even better.',
      iconPath: 'assets/meowlwatch-logo.png',
      iconAltText: 'MeowlWatch Logo',
      href: 'https://itunes.apple.com/us/app/meowlwatch-for-northwestern-university-dining/id1219875692?mt=8'
    }),
    Project.create({
      title: '.dev',
      description: 'Software Dev Director and Co-Founder of a new club at Northwestern for software devs to connect and make cool stuff. Website coming soon.',
      iconPath: 'assets/dotdev-icon.png',
      iconAltText: '.dev Logo',
      href: 'https://northwestern.campuslabs.com/engage/organization/dotdev'
    }),
    Project.create({
      title: 'Wildhacks',
      description: Ember.String.htmlSafe('Software Dev for the Wildhacks team at <a href="https://nuisepic.org" target="_blank">Northwestern Entrepreneurs In Action (EPIC)</a> to plan an awesome hackathon. Currently working on attendee tracking system.'),
      iconPath: 'assets/wildhacks-wordmark.svg',
      iconAltText: 'Wildhacks',
      href: 'http://wildhacks.org'
    }),
    Project.create({
      title: 'Undergrad Teaching Assistant',
      description: Ember.String.htmlSafe('Fundamentals of Computer Programming in <a href="https://racket-lang.org" target="_blank">Racket</a> since March 2017.'),
      iconPath: 'assets/racket-logo.svg',
      iconAltText: 'Racket',
      href: 'https://github.com/NathanJang/EECS111-2017SQ-Study-Guide'
    }),
    Project.create({
      title: 'This Website',
      description: Ember.String.htmlSafe('Built with <a href="https://emberjs.com" target="_blank">Ember</a>. It&apos;s also responsive!'),
      iconPath: 'assets/ember-logo.png',
      iconAltText: 'Ember JS',
      href: 'https://github.com/NathanJang/nathanjang.github.io'
    })
  ])

});
