import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class GoodbyeMeowlwatchContentComponent extends Component {
  @service('dark-mode') darkModeService;

  get isDarkMode() {
    return this.darkModeService.isDarkMode;
  }
}
