/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-countdown',

  included: function included(app) {
    this._super.included(app);

    app.import({
      development: app.bowerDirectory + '/countdownjs/countdown.js',
      production: app.bowerDirectory + '/countdownjs/countdown.min.js'
    });
    app.import('vendor/ember-countdown.js', {
      exports: {
        countdown: ['default']
      }
    });
  }
};
