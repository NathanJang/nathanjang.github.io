import { module, test } from 'qunit';
import { setupRenderingTest } from 'jonathanchan-me/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | daylight-saving-time-content',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<DaylightSavingTimeContent />`);

      assert.dom().hasText('');

      // Template block usage:
      await render(hbs`
      <DaylightSavingTimeContent>
        template block text
      </DaylightSavingTimeContent>
    `);

      assert.dom().hasText('template block text');
    });
  }
);
