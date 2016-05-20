import layout from '../templates/components/countdown-string';
import countdown from 'countdownjs';
import CountdownComponent from 'ember-countdown/components/countdown-component';

export default CountdownComponent.extend({
  layout,

  countdownText() {
    countdown.setLabels(this.get('singularLabel'), this.get('pluralLabel'), this.get('lastLabel'), this.get('delimLabel'), this.get('emptyLabel'));
    const newCountdown = countdown(this.get('parsedStartDate'), this.get('parsedEndDate'), this.get('units'), this.get('max'));

    if(this.get('suffix') && newCountdown.value > 0) {
      this.set('text', `${newCountdown.toString()} ${this.get('suffixFromNow')}`);
    } else if(this.get('suffix') && newCountdown.value < 0) {
      this.set('text', `${newCountdown.toString()} ${this.get('suffixToNow')}`);
    } else {
      this.set('text', newCountdown.toString());
    }
  }
});
