import Ember from 'ember';
import Project from '../util/project';
import links from '../util/links';

export default Ember.Component.extend({

  classNames: Ember.A(['experience-container']),

  projects: Ember.computed(function () {
    return Ember.A([
      Project.create({
        title: 'Convoy',
        caption: 'Summer 2019 Software Engineering Intern',
        description: Ember.String.htmlSafe('Designed and launched a new automation workflow for shipment operations team to better manage staff allocation.<br />Saved 3,000 human-hours per year, and empowered teammates to spend that time reaching company goals.'),
        iconPath: '/assets/convoy-logo.svg',
        shouldMaskIcon: false,
        iconAltText: 'Convoy Logo',
        href: links.convoy
      }),
      Project.create({
        title: 'Divisi',
        caption: Ember.String.htmlSafe(`Summer 2018 Internship Project with ${rawLink(links.fulcrumgt, 'Fulcrum GT')}`),
        description: Ember.String.htmlSafe(`Ideated and designed an iOS and web platform to help travelling groups to split bills, using ${rawLink(links.coreData, 'Core Data')}, ${rawLink(links.react, 'React')}, and ${rawLink(links.socketIo, 'Socket.IO')}, in a fast-paced startup team.`),
        iconPath: '/assets/divisi-logo.png',
        shouldMaskIcon: false,
        iconAltText: 'Divisi Logo',
        href: links.fulcrumLabs
      }),
      Project.create({
        title: 'MeowlWatch',
        caption: 'Independent iOS App',
        description: Ember.String.htmlSafe(`Launched an independent iOS app, for students to budget meals and find places to eat. Created as personal-use app and became popular among Northwestern students. 4,500 downloads, 60 paying users, 100 daily users. Integrated with iOS using StoreKit, NotificationCenter, and SiriKit. ${rawLink(links.meowlwatchSource, 'Source Code')}`),
        iconPath: '/assets/meowlwatch-logo.png',
        shouldMaskIcon: true,
        iconAltText: 'MeowlWatch Logo',
        linkTitleText: 'See MeowlWatch on the App Store.',
        href: links.meowlwatch
      }),
      Project.create({
        title: '.dev',
        caption: 'Co-Founder and Software Development Director',
        description: 'Founded a new community for motivated developers, with 50 active members, emphasising inclusivity, diversity, and applied exploration. Inspired members to overcome product hurdles by organising workshops about industry technologies, academic topics, UX, and entrepreneurship.',
        iconPath: '/assets/dotdev-icon.png',
        shouldMaskIcon: false,
        iconAltText: '.dev Logo',
        linkTitleText: 'See our club website.',
        href: links.dotDev
      }),
      Project.create({
        title: 'Undergrad Teaching Assistant',
        caption: 'Rust, Data Structures, Intro to CS',
        description: Ember.String.htmlSafe(`Previously ${rawLink(links.rust, 'Rust')}, and Intro to CS in ${rawLink(links.racket, 'Racket')}. Focused on tangible analogies that helped students to achieve above-average A grades.`),
        iconPath: '/assets/rust-logo.svg',
        iconAltText: 'Rust',
        linkTitleText: 'See a study guide that I wrote.',
        href: links.eecs111StudyGuide
      }),
      Project.create({
        title: 'Cooking',
        caption: 'I live for food.',
        description: 'Ongoing projects include ramen, bread, and pastries. Check out my cooking Instagram!',
        iconPath: '/assets/cooking.svg',
        iconAltText: 'Cooking',
        linkTitleText: 'See my cooking Instagram.',
        href: links.palatablePuns
      }),
      Project.create({
        title: 'Language',
        description: 'I\'m learning French and pursuing a Linguistics minor. Teach me your language!',
        iconPath: '/assets/language.svg',
        iconAltText: 'Bicycle',
        action: function () {}
      }),
      Project.create({
        title: 'Cycling',
        description: 'I love cycling when the weather\'s nice! I believe that we should structure our transportation around bikes and public transit, for a better world.',
        iconPath: '/assets/cycling.svg',
        iconAltText: 'Bicycle',
        action: function () {}
      }),
      Project.create({
        title: 'This Website!',
        caption: Ember.String.htmlSafe(`${rawLink('https://travis-ci.com/NathanJang/nathanjang.github.io', `<img src="${links.thisSiteTravisBadge}" />`)}`),
        description: Ember.String.htmlSafe(`Built with ${rawLink(links.ember, 'Ember.js')}.`),
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

function rawLink(href, content) {
  return `<a href="${href}" target="_blank">${content}</a>`;
}
