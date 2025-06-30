import { module, test } from 'qunit';
import { setupTest } from 'jonathanchan-me/tests/helpers';

module('Unit | Controller | example', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:example');
    assert.ok(controller);
  });
});
