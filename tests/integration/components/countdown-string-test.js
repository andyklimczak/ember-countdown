import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('countdown-string', 'Integration | Component | countdown string', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{countdown-string startDate=657050213000 endDate=1463255482000 interval=0}}`);
  assert.equal(this.$().text().trim(), '25 years, 6 months, 18 days, 1 hour, 54 minutes and 29 seconds');
});

test('it renders with max', function(assert) {
  this.render(hbs`{{countdown-string startDate=657050213000 endDate=1463255482000 interval=0 max=3}}`);
  assert.equal(this.$().text().trim(), '25 years, 6 months and 18 days');
});

test('it renders with fromNow suffix', function(assert) {
  this.render(hbs`{{countdown-string startDate=657050213000 endDate=1463255482000 interval=0 suffix=true}}`);
  assert.equal(this.$().text().trim(), '25 years, 6 months, 18 days, 1 hour, 54 minutes and 29 seconds ago');
});

test('it renders with toNow suffix', function(assert) {
  this.render(hbs`{{countdown-string endDate="2015/04/20" startDate="2020/01/01" interval=0 suffix=true}}`);
  assert.equal(this.$().text().trim(), '4 years, 8 months and 11 days left');
});

test('it renders without last label', function(assert) {
  this.render(hbs`{{countdown-string endDate="2015/04/20" startDate="2020/01/01" interval=0 lastLabel=' '}}`);
  assert.equal(this.$().text().trim(), '4 years, 8 months 11 days');
});
