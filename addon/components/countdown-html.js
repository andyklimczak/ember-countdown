import Ember from 'ember';
import layout from '../templates/components/countdown-html';
import countdown from 'countdownjs';

export default Ember.Component.extend({
  layout: layout,
  startDate: null,
  endDate: Date.now(),
  units: countdown.DEFAULT,
  max: null,
  text: null,
  interval: 1000,
  suffix: false,
  suffixFromNow: 'ago',
  suffixToNow: 'left',
  htmlTag: 'span',
  singularLabel: null,
  pluralLabel: null,
  lastLabel: null,
  delimLabel: null,
  emptyLabel: null,
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
      this.set('endDate', new Date());
      this.countdownText();
      this.update();
    }, this.get('interval'));
  },

  countdownText() {
    countdown.setLabels(this.get('singularLabel'), this.get('pluralLabel'), this.get('lastLabel'), this.get('delimLabel'), this.get('emptyLabel'));
    const newCountdown = countdown(this.get('parsedStartDate'), this.get('parsedEndDate'), this.get('units'), this.get('max'));
    const tag = this.get('htmlTag');

    if(this.get('suffix') && newCountdown.value > 0) {
      this.set('text', `${newCountdown.toHTML(tag)} ${this.get('suffixFromNow')}`);
    } else if(this.get('suffix') && newCountdown.value < 0) {
      this.set('text', `${newCountdown.toHTML(tag)} ${this.get('suffixToNow')}`);
    } else {
      this.set('text', newCountdown.toHTML(tag));
    }
  }
});
