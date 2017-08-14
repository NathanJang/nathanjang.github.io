
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('is-last-array-index', 'helper:is-last-array-index', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{is-last-array-index inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

