# ember-countdown
[![Build Status](https://travis-ci.org/andyklimczak/ember-countdown.svg?branch=master)](https://travis-ci.org/andyklimczak/ember-countdown)

Ember-cli addon for [countdownjs](https://github.com/mckamey/countdownjs), and allowing countdownjs to be consumed as an ES6 module in your ember application.

```shell
ember install ember-countdown
```
```javascript
import countdown from 'countdownjs';
```

As a component:
```javascript
{{countdown-string startDate=657050213000}}
```
=> ```25 years, 6 months, 18 days, 7 hours, 43 minutes and 35 seconds```

```javascript
{{countdown-html startDate='1992/11/24'}}
```
=> ```<span>25 years</span>, <span>6 months</span>, <span>18 days</span>, <span>7 hours</span>, <span>43 minutes</span> and <span>57 seconds</span>```

To create a countdown that only has months and days, create a new component in your project that extends the components from this addon:
```javascript
import countdown from 'countdownjs';
import CountdownString from 'ember-countdown/components/countdown-string';

export default CountdownString.extend({
  units: countdown.MONTHS|countdown.DAYS
});
```

Other values can be overriden as well:
```javascript
import countdown from 'countdownjs';
import CountdownHTML from 'ember-countdown/components/countdown-html';

export default CountdownHTML.extend({
  htmlTag: 'b',
  units: countdown.SECONDS
});
```
WARNING: If you use `ember generate component my-countdown`, make sure to delete the generated template file `components/my-countdown.hbs` or nothing will appear.

Further usage examples for the two components with all optional parameters explored can be seen in the [integration tests](https://github.com/andyklimczak/ember-countdown/tree/master/tests/integration/components) and the addon's [dummy app](https://github.com/andyklimczak/ember-countdown/blob/master/tests/dummy/app/templates/application.hbs). Explanation of the parameters is documented in the [countdownjs](https://github.com/mckamey/countdownjs) readme.

## Development Installation

* `git clone` this repository
* `npm install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
