import Ember from 'ember';
import RedeyeQuestion from '../util/redeye-question';

export default Ember.Controller.extend({

  init() {
    this.setUpdateInterval();
  },

  currentDate: null,

  setDate() {
    Ember.Logger.debug('setDate called');
    this.set('currentDate', new Date());
  },

  setUpdateInterval() {
    Ember.Logger.debug('setUpdateInterval called');
    this.setDate()
    setInterval(() => this.setDate(), 60 * 1000);
  },

  // The date when we first go to sleep, minus one day for waiting period
  initialSleepDateMinusOneDay: new Date('2017-08-24T08:00:00'), // UTC

  hoursOfSleepPer28hrDay: 9,

  // The total duration of this trial in hours (1 week plus one day waiting)
  numberOfHoursOfRedEye: 1 * 7 * 28,

  // One of the following:
  //  - waiting
  //  - awake
  //  - asleep
  //  - done
  redeyeState: Ember.computed('currentDate', function () {
    const currentDate = this.get('currentDate'), initialSleepDateMinusOneDay = this.get('initialSleepDateMinusOneDay');
    Ember.Logger.debug('Received dates', 'currentDate', currentDate, 'initialSleepDateMinusOneDay', initialSleepDateMinusOneDay);
    const difference = (currentDate.getTime() - initialSleepDateMinusOneDay.getTime()) / 1000; // in seconds
    if (currentDate < initialSleepDateMinusOneDay || Math.floor(difference / 60 / 60) < this.get('hoursOfSleepPer28hrDay')) {
      return 'waiting';
    }

    if (difference > this.get('numberOfHoursOfRedEye') * 60 * 60) { return 'done'; }

    const currentHourOf28hrDay = (difference / 60 / 60) % 28;
    if (currentHourOf28hrDay < this.get('hoursOfSleepPer28hrDay')) { return 'asleep'; }

    return 'awake';
  }),

  redeyeStateFormatted: Ember.computed('currentDate', function () {
    const currentDate = this.get('currentDate'), initialSleepDateMinusOneDay = this.get('initialSleepDateMinusOneDay');

    const difference = (currentDate.getTime() - initialSleepDateMinusOneDay.getTime()) / 1000; // in seconds
    const currentHourOf28hrDay = Math.floor(difference / 60 / 60) % 28;
    Ember.Logger.debug('currentHourOf28hrDay', currentHourOf28hrDay);

    switch (this.get('redeyeState')) {
      case 'waiting':
        return 'Hyped to start soon! 🔥';
      case 'awake':
        return `Yep 👍, sleeping in ${Math.ceil(difference / 60) % 60 !== 0 ? 28 - currentHourOf28hrDay - 1 : 28 - currentHourOf28hrDay} hours ${(difference / 60) % 60 === 0 ? 0 : 60 - Math.ceil(difference / 60) % 60} minutes. It's been ${Math.floor(difference / 60 / 60 / 28)} day(s).`;
      case 'asleep':
        return `Sleeping 💤, waking in ${Math.ceil(difference / 60) % 60 !== 0 ? this.get('hoursOfSleepPer28hrDay') - currentHourOf28hrDay - 1 : this.get('hoursOfSleepPer28hrDay') - currentHourOf28hrDay} hours ${(difference / 60) % 60 === 0 ? 0 : 60 - Math.ceil(difference / 60) % 60} minutes. It's been ${Math.floor(difference / 60 / 60 / 28)} day(s).`;
      case 'done':
        return 'Donezos ✅🔥';
    }
  }),

  questions: Ember.computed('hoursOfSleepPer28hrDay', function () {
    const hoursOfSleepPer28hrDay = this.get('hoursOfSleepPer28hrDay');
    return Ember.A([
      RedeyeQuestion.create({
        question: 'What is this?',
        answer: `I'm doing an experiment. Instead of going through a seven-day week as usual, this week will have six 28-hour cycles for me. Each cycle, I will sleep for ${hoursOfSleepPer28hrDay} hours, and be awake for ${28 - hoursOfSleepPer28hrDay}. You can check if I'm awake up there 👆. Check back later if you're curious!`
      }),
      RedeyeQuestion.create({
        question: 'When is this happening?',
        answer: 'August 25 to September 1, 2017, China time.'
      }),
      RedeyeQuestion.create({
        question: 'Why 28-hour cycles?',
        answer: '28 times 6 happens to be 24 times 7, so my schedule will sync up with the world after exactly a week.'
      }),
      RedeyeQuestion.create({
        question: 'But why?',
        answer: Ember.String.htmlSafe('This will give me many more waking hours per week than a normal seven-day week. It\'ll just be a week, so might as well try it 🤷. <a href="https://lmgtfy.com/?q=28+hour+day" target="_blank">Google it</a>.‍')
      })
    ]);
  }),

  containerClassNames: Ember.computed('redeyeState', function () {
    if (this.get('redeyeState') === 'asleep') { return 'redeye-container-asleep'; }
    return 'redeye-container-awake';
  }),

  actions: {
    didClickBackButton() {
      this.transitionToRoute('index');
    }
  }

});
