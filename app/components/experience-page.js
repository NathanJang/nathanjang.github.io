import Ember from 'ember';
import Project from '../util/project';
import links from '../util/links';

export default Ember.Component.extend({

  projects: Ember.A([
    Project.create({
      title: 'MeowlWatch',
      description: 'An iOS app to help Northwestern Students get the most out of their meal plan. In talks with Northwestern Dining to make it even better.',
      iconPath: 'assets/meowlwatch-logo.png',
      iconAltText: 'MeowlWatch Logo',
      href: links.meowlwatch
    }),
    Project.create({
      title: '.dev',
      description: 'Software Development Director and Co-Founder. A new club at Northwestern for devs to connect and make cool stuff. Website coming soon.',
      iconPath: 'assets/dotdev-icon.png',
      iconAltText: '.dev Logo',
      href: links.dotDev
    }),
    Project.create({
      title: 'WildHacks',
      description: Ember.String.htmlSafe(`Software Developer for the WildHacks team at <a href="${links.epic}" target="_blank">Northwestern Entrepreneurship In Action (EPIC)</a> to plan an awesome hackathon. Currently working on attendee tracking system.`),
      iconPath: 'assets/wildhacks-wordmark.svg',
      iconAltText: 'Wildhacks',
      href: links.wildhacks
    }),
    Project.create({
      title: 'Undergrad Teaching Assistant',
      description: Ember.String.htmlSafe(`Fundamentals of Computer Programming in <a href="${links.racket}" target="_blank">Racket</a> since March 2017.`),
      iconPath: 'assets/racket-logo.svg',
      iconAltText: 'Racket',
      href: links.eecs111StudyGuide
    }),
    Project.create({
      title: 'This Website!',
      description: Ember.String.htmlSafe(`Built with <a href="${links.ember}" target="_blank">Ember</a>. It&#8217;s also responsive!`),
      iconPath: 'assets/ember-logo.png',
      iconAltText: 'Ember JS',
      href: links.thisSiteSource
    }),
    Project.create({
      title: 'And More To Come.',
      description: 'Hire me maybe? :)',
      iconPath: 'assets/heart.svg',
      iconAltText: 'Ember JS',
      href: links.linkedin
    })
  ])

});
