import Ember from 'ember';
import Project from '../util/project';
import links from '../util/links';

export default Ember.Component.extend({

  classNames: Ember.A(['experience-container']),

  projects: Ember.computed(function () {
    return Ember.A([
      Project.create({
        title: 'Divisi',
        description: Ember.String.htmlSafe(`Ideated and designed an iOS and web platform to help travelling groups to split bills, using Core Data, React, and Socket.IO, in a fast-paced startup team. Internship project for Summer 2018 at Fulcrum Labs, with <a href="${links.fulcrumgt}">Fulcrum GT</a>.`),
        iconPath: '/assets/divisi-logo.png',
        shouldMaskIcon: false,
        iconAltText: 'Divisi Logo',
        href: links.fulcrumLabs
      }),
      Project.create({
        title: 'MeowlWatch',
        description: Ember.String.htmlSafe(`An iOS app to help Northwestern Students get the most out of their meal plan. Created as personal-use app and became popular among Northwestern students. 4,500 downloads, 60 paying users, 100 daily users. <a href="${links.meowlwatchSource}" target="_blank">Source Code</a>`),
        iconPath: '/assets/meowlwatch-logo.png',
        shouldMaskIcon: true,
        iconAltText: 'MeowlWatch Logo',
        linkTitleText: 'See MeowlWatch on the App Store.',
        href: links.meowlwatch
      }),
      Project.create({
        title: '.dev',
        description: Ember.String.htmlSafe('Co-Founder and Software Development Director.<br />A new student organization at Northwestern for devs and non-devs to connect and work on innovative projects collaboratively.'),
        iconPath: '/assets/dotdev-icon.png',
        shouldMaskIcon: true,
        iconAltText: '.dev Logo',
        linkTitleText: 'See our club website.',
        href: links.dotDev
      }),
      Project.create({
        title: 'WildHacks',
        description: Ember.String.htmlSafe(`Software Developer for the WildHacks team at <a href="${links.epic}" target="_blank">Northwestern Entrepreneurship In Action (EPIC)</a> to plan an awesome hackathon. Currently working on attendee tracking system.`),
        iconPath: '/assets/wildhacks-wordmark.svg',
        iconAltText: 'Wildhacks',
        linkTitleText: 'See WildHacks\'s website.',
        href: links.wildhacks
      }),
      Project.create({
        title: 'Undergrad Teaching Assistant',
        description: Ember.String.htmlSafe(`Fundamentals of Computer Programming in <a href="${links.racket}" target="_blank">Racket</a> since March 2017.`),
        iconPath: '/assets/racket-logo.svg',
        iconAltText: 'Racket',
        linkTitleText: 'See a study guide that I wrote.',
        href: links.eecs111StudyGuide
      }),
      Project.create({
        title: 'This Website!',
        description: Ember.String.htmlSafe(`Built with <a href="${links.ember}" target="_blank">Ember</a>. It&#8217;s also responsive!`),
        iconPath: '/assets/ember-logo.png',
        iconAltText: 'Ember JS',
        linkTitleText: 'See this website\'s source code.',
        href: links.thisSiteSource
      }),
      Project.create({
        title: 'Is Jon awake?',
        description: 'Click to find out.',
        iconPath: '/assets/clock-icon.svg',
        iconAltText: 'Clock',
        action: function () {
          Ember.getOwner(this).lookup('router:main').transitionTo('redeye');
        }.bind(this)
      }),
      Project.create({
        title: 'And More To Come.',
        description: 'Hire me maybe? :)',
        iconPath: '/assets/heart.svg',
        iconAltText: 'Heart',
        linkTitleText: 'See my LinkedIn profile.',
        href: links.linkedin
      })
    ])
  })

});
