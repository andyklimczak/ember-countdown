import countdown from 'countdownjs';
import CountdownHTML from 'ember-countdown/components/countdown-html';

export default CountdownHTML.extend({
  units: countdown.SECONDS
});
