import layout from '../templates/components/countdown-html';
import countdown from 'countdownjs';
import CountdownComponent from 'ember-countdown/components/countdown-component';
import { htmlSafe } from '@ember/template';

export default CountdownComponent.extend({
  htmlTag: 'span',
  layout,

  countdownText() {
    countdown.setLabels(this.get('singularLabel'), this.get('pluralLabel'), this.get('lastLabel'), this.get('delimLabel'), this.get('emptyLabel'));
    const newCountdown = countdown(this.get('parsedStartDate'), this.get('parsedEndDate'), this.get('units'), this.get('max'));
    const tag = this.get('htmlTag');

    let text = null;
    if(this.get('suffix') && newCountdown.value > 0) {
      text = `${newCountdown.toHTML(tag)} ${this.get('suffixFromNow')}`;
    } else if(this.get('suffix') && newCountdown.value < 0) {
      text = `${newCountdown.toHTML(tag)} ${this.get('suffixToNow')}`;
    } else {
      text = htmlSafe(newCountdown.toHTML(tag));
    }
    this.set('text', htmlSafe(text));
  }
});
