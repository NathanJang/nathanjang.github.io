import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class DaylightSavingTimeContentComponent extends Component {
  @service('daylight-saving-time-timer') timerService;

  get currentPDT() {
    return this.timerService.currentPDT;
  }

  get currentPST() {
    return this.timerService.currentPST;
  }

  get isOnSummerTime() {
    return this.currentPDT === this.currentPST;
  }

  get currentSunsetPDT() {
    const dayOfYear = Math.floor(
      (this.timerService.currentDate -
        new Date(this.timerService.currentDate.getFullYear(), 0, 0)) /
        (1000 * 60 * 60 * 24),
    );

    const minutesAfterMidnightMin = 17 * 60 + 17; // 17:17 PDT
    const minutesAfterMidnightMax = 21 * 60 + 11; // 21:11 PDT
    const dayOfYearMin = 344; // 12-10
    const dayOfYearMax = 176; // 06-25
    const amplitude = (minutesAfterMidnightMax - minutesAfterMidnightMin) / 2;
    const midline = (minutesAfterMidnightMin + minutesAfterMidnightMax) / 2;

    if (dayOfYear <= dayOfYearMin || dayOfYear > dayOfYearMax) {
      const frequency = Math.PI / (dayOfYearMax + (365 - dayOfYearMin));
      const phaseShift = -(365 - dayOfYearMin);
      const resultantMinutesAfterMidnight =
        -amplitude * Math.cos(frequency * (dayOfYear - phaseShift)) + midline;
      const hours = this._zeroPad(
        Math.floor(resultantMinutesAfterMidnight / 60),
      );
      const minutes = this._zeroPad(
        Math.floor(resultantMinutesAfterMidnight % 60),
      );
      return `${hours}:${minutes}`;
    } else {
      const frequency = Math.PI / (dayOfYearMin - dayOfYearMax);
      const phaseShift = dayOfYearMax;
      const resultantMinutesAfterMidnight =
        amplitude * Math.cos(frequency * (dayOfYear - phaseShift)) + midline;
      const hours = this._zeroPad(
        Math.floor(resultantMinutesAfterMidnight / 60),
      );
      const minutes = this._zeroPad(
        Math.floor(resultantMinutesAfterMidnight % 60),
      );
      return `${hours}:${minutes}`;
    }
  }

  get currentSunsetPST() {
    if (this.isOnSummerTime) {
      return this.currentSunsetPDT;
    }
    const components = this.currentSunsetPDT.split(':');
    const hours = this._zeroPad((Number(components[0]) - 1) % 24);
    const minutes = components[1];
    return `${hours}:${minutes}`;
  }

  _zeroPad(timeComponent) {
    if (timeComponent < 10) {
      return `0${timeComponent}`;
    }
    return `${timeComponent}`;
  }
}
