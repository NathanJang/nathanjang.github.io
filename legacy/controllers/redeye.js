import Ember from 'ember';
import RedeyeQuestion from '../util/redeye-question';

export default Ember.Controller.extend({

  currentDate: null,

  setDate() {
    Ember.Logger.debug('setDate called');
    this.set('currentDate', new Date());
  },

  // The date when we first go to sleep, minus one day for waiting period
  initialSleepDateMinusOneDay: new Date(Date.UTC(2017, 7, 24, 9)), // 2018-08-24T09:00Z (UTC), or initial sleep date = 2018-08-25T21:00+0800 (China time)

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
        return `Yep 👍, sleeping in ${this.get('countdownText')}`;
      case 'asleep':
        return `Sleeping 💤, waking in ${this.get('countdownText')}`;
      case 'done':
        return 'Donezos ✅🔥';
    }
  }),

  countdownText: Ember.computed('currentDate', function () {
    const currentDate = this.get('currentDate'), initialSleepDateMinusOneDay = this.get('initialSleepDateMinusOneDay');

    const difference = (currentDate.getTime() - initialSleepDateMinusOneDay.getTime()) / 1000; // in seconds
    const currentHourOf28hrDay = Math.floor(difference / 60 / 60) % 28;
    const days = Math.floor(difference / 60 / 60 / 28);
    let hours, minutes;

    function formattedText({ hours, minutes, localTime }) {
      return `${hours} hours ${minutes} minutes (${localTime} local time). It's been ${days} days.`;
    }

    switch (this.get('redeyeState')) {
      case 'awake':
        hours = Math.ceil(difference / 60) % 60 !== 0 ? 28 - currentHourOf28hrDay - 1 : 28 - currentHourOf28hrDay;
        minutes = (difference / 60) % 60 === 0 ? 0 : 60 - Math.ceil(difference / 60) % 60;
        break;
      case 'asleep':
        hours = Math.ceil(difference / 60) % 60 !== 0 ? this.get('hoursOfSleepPer28hrDay') - currentHourOf28hrDay - 1 : this.get('hoursOfSleepPer28hrDay') - currentHourOf28hrDay;
        minutes = (difference / 60) % 60 === 0 ? 0 : 60 - Math.ceil(difference / 60) % 60;
        break;
      default:
        return '';
    }

    const localTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours() + hours, currentDate.getMinutes() + minutes + 1).toLocaleTimeString('en-US');

    return formattedText({ hours, minutes, localTime });
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
        answer: Ember.String.htmlSafe('This will give me many more waking hours per week than a normal seven-day week. Since I\'m mainly working at home, maybe it\'ll make me more productive. It\'ll just be a week, so might as well try it 🤷. <a href="https://lmgtfy.com/?q=28+hour+day" target="_blank">Google it?</a>')
      }),
      RedeyeQuestion.create({
        question: 'Why the website?',
        answer: 'I need a clock that\'s based on 28-hour days lmao.'
      })
    ]);
  }),

  containerClassNames: Ember.computed('redeyeState', function () {
    if (this.get('redeyeState') === 'asleep') { return 'redeye-container-asleep'; }
    return 'redeye-container-awake';
  })

});
