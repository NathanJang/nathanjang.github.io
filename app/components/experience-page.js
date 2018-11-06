import Ember from 'ember';
import Project from '../util/project';
import links from '../util/links';

export default Ember.Component.extend({

  classNames: Ember.A(['experience-container']),

  projects: Ember.computed(function () {
    return Ember.A([
      Project.create({
        title: 'Divisi',
        caption: 'Summer 2018 Internship Project',
        description: Ember.String.htmlSafe(`Ideated and designed an iOS and web platform to help travelling groups to split bills, using Core Data, React, and Socket.IO, in a fast-paced startup team. Fulcrum Labs, with <a href="${links.fulcrumgt}">Fulcrum GT</a>.`),
        iconPath: '/assets/divisi-logo.png',
        shouldMaskIcon: false,
        iconAltText: 'Divisi Logo',
        href: links.fulcrumLabs
      }),
      Project.create({
        title: 'MeowlWatch',
        caption: 'Independent iOS App',
        description: Ember.String.htmlSafe(`Designed and launched an app for students to budget meals and find places to eat. Created as personal-use app and became popular among Northwestern students. 4,500 downloads, 60 paying users, 100 daily users. <a href="${links.meowlwatchSource}" target="_blank">Source Code</a>`),
        iconPath: '/assets/meowlwatch-logo.png',
        shouldMaskIcon: true,
        iconAltText: 'MeowlWatch Logo',
        linkTitleText: 'See MeowlWatch on the App Store.',
        href: links.meowlwatch
      }),
      Project.create({
        title: '.dev',
        caption: 'Co-Founder and Software Development Director',
        description: 'Founded a community for more than 50 motivated developers. Inspired members to overcome product hurdles by holding workshops about technologies, UX, and ideation, exchanging expertise with fellow co-founders.',
        iconPath: '/assets/dotdev-icon.png',
        shouldMaskIcon: false,
        iconAltText: '.dev Logo',
        linkTitleText: 'See our club website.',
        href: links.dotDev
      }),
      Project.create({
        title: 'Undergrad Teaching Assistant',
        description: Ember.String.htmlSafe(`Data Structures and Algorithms, and Fundamentals of Computer Programming in <a href="${links.racket}" target="_blank">Racket</a> since March 2017.`),
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
