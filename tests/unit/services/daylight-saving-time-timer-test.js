import { module, test } from 'qunit';
import { setupTest } from 'jonathanchan-me/tests/helpers';

module('Unit | Service | daylight-saving-time-timer', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:daylight-saving-time-timer');
    assert.ok(service);
  });
});
