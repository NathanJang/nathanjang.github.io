import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DaylightSavingTimeTimerService extends Service {
  constructor() {
    super(...arguments);
    this._scheduleTick();
  }

  currentDate = new Date();

  _scheduleTick() {
    setTimeout(
      () => {
        this._tick();
        this._scheduleTick();
      },
      Math.max(700, 1000 - this.currentDate.getMilliseconds()),
    );
  }

  _tick() {
    this.currentDate = new Date();
    this.currentPDT = this._currentPDT();
    this.currentPST = this._currentPST();
  }

  @tracked
  currentPDT = this._currentPDT();

  _currentPDT() {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Phoenix',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(this.currentDate);
  }

  @tracked
  currentPST = this._currentPST();

  _currentPST() {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Los_Angeles',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(this.currentDate);
  }
}
