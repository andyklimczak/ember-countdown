import { module, test } from 'qunit';
import Countdown from 'countdownjs';

module('countdown as an es6 module');

test('it is a valid module', function(assert) {
  assert.ok(Countdown);
});

test('creates a timespan', function(assert) {
  var result = new Countdown(new Date(2000, 0, 1), new Date(2001,0,1)).toString(); // Jan 1 2000 -> Jan 1 2001
  assert.equal(result, '1 year');
});
