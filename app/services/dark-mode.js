import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DarkModeService extends Service {
  @tracked
  isDarkMode = this._isDarkMode();

  constructor() {
    super(...arguments);
    if (window.matchMedia) {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', () => {
          this.isDarkMode = this._isDarkMode();
        });
    }
  }

  _isDarkMode() {
    return (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  }
}
