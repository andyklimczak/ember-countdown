# Ember-countdown
[![Build Status](https://travis-ci.org/andyklimczak/ember-countdown.svg?branch=master)](https://travis-ci.org/andyklimczak/ember-countdown)

Ember-cli addon for [countdownjs](https://github.com/mckamey/countdownjs), allowing it to be consumed as an ES6 module.

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
=> 25 years, 6 months, 18 days, 7 hours, 43 minutes and 35 seconds

```javascript
{{countdown-html startDate='1992/11/24'}}
```
=> <span>25 years</span>, <span>6 months</span>, <span>18 days</span>, <span>7 hours</span>, <span>43 minutes</span> and <span>57 seconds</span>

Further usage examples for the two components with all optional parameters explored can be seen in the [integrationt tests](tests/integrations/components). Explanation of the parameters is documented in the [countdownjs](https://github.com/mckamey/countdownjs) readme.

## Development Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
