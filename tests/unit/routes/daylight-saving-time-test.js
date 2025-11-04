import { module, test } from 'qunit';
import { setupTest } from 'jonathanchan-me/tests/helpers';

module('Unit | Route | daylight-saving-time', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:daylight-saving-time');
    assert.ok(route);
  });
});
