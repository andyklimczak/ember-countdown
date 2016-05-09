(function() {
  /* globals define, countdown */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('countdownjs', { 'default': countdown });
})();
