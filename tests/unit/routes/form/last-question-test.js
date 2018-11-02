import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | form/last-question', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:form/last-question');
    assert.ok(route);
  });
});
