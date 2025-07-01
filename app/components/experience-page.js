import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
import Project from '../util/project';
import links from '../util/links';

export default class ExperiencePage extends Component {
  currentProjects = [
    new Project({
      title: 'Apple',
      caption: 'Software Engineer',
      description: htmlSafe(
        'Building experiences for Apple&nbsp;Vision&nbsp;Pro, iOS, and other platforms.<br><br>Brought Image&nbsp;Playground, Apple&nbsp;Intelligence, and more to the world of spatial computing.',
      ),
      iconPath: '/assets/apple-vision-pro.svg',
      shouldMaskIcon: false,
      iconAltText: 'Apple Vision Pro',
      href: links.appleVisionPro,
    }),
  ];

  pastProjects = [
    new Project({
      title: 'Convoy',
      caption: htmlSafe('Software Engineer (2020&ndash;2023)'),
      description: htmlSafe(
        'Convoy is a mobile and web marketplace for freight brokers, shippers, and carriers.<br><br>Developed and maintained powerful mobile app and web tools to enable transparency and independence for carriers.',
      ),
      iconPath: '/assets/convoy-logo.svg',
      shouldMaskIcon: false,
      iconAltText: 'Convoy Logo',
      href: links.convoy,
    }),
    new Project({
      title: 'Convoy',
      caption: 'Software Engineering Intern (2019)',
      description: htmlSafe(
        'Designed and launched a new automation workflow for shipment operations team to better manage staff allocation.<br><br>Saved 3,000 human-hours per year, and empowered teammates to spend that time reaching company goals.',
      ),
      iconPath: '/assets/convoy-logo.svg',
      shouldMaskIcon: false,
      iconAltText: 'Convoy Logo',
      href: links.convoy,
    }),
    // new Project({
    //   title: 'Divisi',
    //   caption: htmlSafe(`Summer 2018 Internship Project with ${this.rawLink(links.fulcrumgt, 'Fulcrum GT')}`),
    //   description: htmlSafe(`Ideated and designed an iOS and web platform to help travelling groups to split bills, using ${this.rawLink(links.coreData, 'Core Data')}, ${this.rawLink(links.react, 'React')}, and ${this.rawLink(links.socketIo, 'Socket.IO')}, in a fast-paced startup team.`),
    //   iconPath: '/assets/divisi-logo.png',
    //   shouldMaskIcon: false,
    //   iconAltText: 'Divisi Logo',
    //   href: links.fulcrumLabs
    // }),
    new Project({
      title: 'MeowlWatch',
      caption: 'Independent iOS App (discontinued)',
      description: htmlSafe(
        `Launched an independent iOS app, for students to budget meals and find places to eat. Created as personal-use app and became popular among Northwestern students. 8,000 downloads, 60 paying users, hundreds of daily users. Integrated with iOS using StoreKit and NotificationCenter. ${this.rawLink(links.meowlwatchSource, 'Source Code')}`,
      ),
      iconPath: '/assets/meowlwatch-logo.png',
      shouldMaskIcon: true,
      iconAltText: 'MeowlWatch Logo',
      linkTitleText: 'Read my post on my journey.',
      // action: function () {
      //     Ember.getOwner(this).lookup('router:main').transitionTo('goodbye-meowlwatch');
      //   }.bind(this)
      route: 'goodbye-meowlwatch',
    }),
    // new Project({
    //   title: '.dev',
    //   caption: 'Co-Founder and Software Development Director',
    //   description: 'Founded a new community for motivated developers, with 50 active members, emphasising inclusivity, diversity, and applied exploration. Inspired members to overcome product hurdles by organising workshops about industry technologies, academic topics, UX, and entrepreneurship.',
    //   iconPath: '/assets/dotdev-icon.png',
    //   shouldMaskIcon: false,
    //   iconAltText: '.dev Logo',
    //   linkTitleText: 'See our club website.',
    //   href: links.dotDev
    // }),
    // new Project({
    //   title: 'Undergrad Teaching Assistant',
    //   caption: 'Rust, Data Structures, Intro to CS',
    //   description: htmlSafe(`Previously ${this.rawLink(links.rust, 'Rust')}, and Intro to CS in ${this.rawLink(links.racket, 'Racket')}. Focused on tangible analogies that helped students to achieve above-average A grades.`),
    //   iconPath: '/assets/rust-logo.svg',
    //   iconAltText: 'Rust',
    //   linkTitleText: 'See a study guide that I wrote.',
    //   href: links.eecs111StudyGuide
    // }),
    new Project({
      title: 'Aviation',
      caption: 'Private Pilot, ASEL',
      description:
        "I'm proud to have accomplished this in 2022, since loving flying as a child!",
      iconPath: '/assets/cessna.svg',
      iconAltText: 'Silhouette of a high-wing aircraft',
      action: function () {},
    }),
    // new Project({
    //   title: 'Language',
    //   description: 'I\'m learning French and love anything related to language. Teach me yours!',
    //   iconPath: '/assets/language.svg',
    //   iconAltText: 'Language',
    //   action: function () {}
    // }),
    new Project({
      title: 'This Website!',
      caption: '',
      // caption: htmlSafe(`${this.rawLink('https://travis-ci.com/NathanJang/nathanjang.github.io', `<img src="${links.thisSiteTravisBadge}" />`)}`),
      description: htmlSafe(
        `Built with ${this.rawLink(links.ember, 'Ember.js')}.`,
      ),
      iconPath: '/assets/ember-logo.png',
      iconAltText: 'Ember JS',
      linkTitleText: "See this website's source code.",
      href: links.thisSiteSource,
    }),
    new Project({
      title: 'And More To Come.',
      description: '',
      iconPath: '/assets/heart.svg',
      iconAltText: 'Heart',
      linkTitleText: 'See my LinkedIn profile.',
      href: links.linkedin,
    }),
  ];

  projectCardShouldBeFullWidth(index, length) {
    return index === length - 1 && length % 2 !== 0;
  }

  rawLink(href, content) {
    return `<a href="${href}" target="_blank">${content}</a>`;
  }
}
