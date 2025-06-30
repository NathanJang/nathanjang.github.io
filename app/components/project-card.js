import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ProjectCard extends Component {
  @action
  click(event) {
    // this._super(...arguments);
    if (!this.href) {
      event.preventDefault();
      // this.get('project.action')();
      this.args.project.action();
    }
  }
}
