import { module, test } from 'qunit';
import { setupTest } from 'jonathanchan-me/tests/helpers';

module('Unit | Route | dst', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:dst');
    assert.ok(route);
  });
});
