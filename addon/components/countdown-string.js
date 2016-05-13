import Ember from 'ember';
import layout from '../templates/components/countdown-string';
import countdown from 'countdownjs';

export default Ember.Component.extend({
  layout: layout,
  startDate: null,
  endDate: Date.now(),
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
  units: countdown.DEFAULT,
  max: null,
  text: Ember.computed({
    get() {
      return countdown(this.get('parsedStartDate'), this.get('parsedEndDate'), this.get('units'), this.get('max')).toString();
    }
  })
});
