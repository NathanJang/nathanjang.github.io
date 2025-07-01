import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProjectCard extends Component {
  @tracked
  isVisible = false;

  @action
  click(event) {
    // this._super(...arguments);
    if (!this.href) {
      event.preventDefault();
      // this.get('project.action')();
      this.args.project.action();
    }
  }

  @action
  onVisibilityChange(newValue) {
    this.isVisible = newValue;
  }
}
