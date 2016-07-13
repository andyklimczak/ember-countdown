import countdown from 'countdownjs';
import CountdownHTML from 'ember-countdown/components/countdown-html';

export default CountdownHTML.extend({
  htmlTag: 'b',
  units: countdown.SECONDS
});
