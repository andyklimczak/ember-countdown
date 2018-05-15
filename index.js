/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-countdown',

  included: function included(app) {
    this._super.included(app);

    this.import('vendor/countdown.js');
    this.import('vendor/shims/countdown.js');
  },

  treeForVendor(vendorTree) {
    var countdownTree = new Funnel(path.dirname(require.resolve('countdown/countdown.js')), {
      files: ['countdown.js'],
    });

    return new MergeTrees([vendorTree, countdownTree]);
  }
};
