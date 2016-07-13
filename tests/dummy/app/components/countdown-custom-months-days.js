import countdown from 'countdownjs';
import CountdownString from 'ember-countdown/components/countdown-string';

export default CountdownString.extend({
  units: countdown.MONTHS|countdown.DAYS
});
