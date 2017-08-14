import Ember from 'ember';
import Project from '../helpers/project';

export default Ember.Component.extend({

  projects: Ember.A([
    Project.create({
      title: 'MeowlWatch',
      description: 'An iOS app to help Northwestern Students get the most out of their meal plan.',
      iconPath: 'meowlwatch-logo.png',
      iconAltText: 'MeowlWatch Logo'
    }),
    Project.create({
      title: '.dev',
      description: 'Software Dev Director and Co-Founder at a new club at Northwestern for software devs to connect and make cool stuff. ldfsaj sadlkjf lk afldsk jldkjlk adsflkj aldfj lkdfasjlk jsdl',
      iconPath: 'meowlwatch-logo.png',
      iconAltText: '.dev Logo'
    }),
    Project.create({
      title: 'EPIC',
      description: 'Software Dev for the Wildhacks team to plan an awesome hackathon.',
      iconPath: 'meowlwatch-logo.png',
      iconAltText: 'EPIC Logo'
    }),
  ])

});
