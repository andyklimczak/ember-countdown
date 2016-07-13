import Ember from 'ember';
import countdown from 'countdownjs';

export default Ember.Component.extend({
  //overridable values
  startDate: null,
  endDate: Date.now(),
  units: countdown.DEFAULT,
  max: null,
  text: null,
  interval: 1000,
  suffix: false,
  suffixFromNow: 'ago',
  suffixToNow: 'left',
  singularLabel: null,
  pluralLabel: null,
  lastLabel: null,
  delimLabel: null,
  emptyLabel: null,
  tagName: '',

  //computed values
  parsedStartDate: Ember.computed('startDate', {
    get() {
      return new Date(this.get('startDate'));
    }
  }),
  parsedEndDate: Ember.computed('endDate', {
    get() {
      return new Date(this.get('endDate'));
    }
  }),

  init() {
    this._super(...arguments);
    countdown.resetLabels();
    this.start();
  },

  start() {
    this.countdownText();
    if(this.get('interval')) {
      this.update();
    }
  },

  update() {
    Ember.run.later(this, function() {
      if(!this.isDestroyed() || !this.isDestroying) {
        this.set('endDate', new Date());
        this.countdownText();
        this.update();
      }
    }, this.get('interval'));
  }
});
