/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-countdown-shim',

  included: function included(app) {
    app.import(app.bowerDirectory + '/countdownjs/countdown.js');
    app.import('vendor/ember-countdown.js', {
      exports: {
        countdown: ['default']
      }
    });
  }
};
