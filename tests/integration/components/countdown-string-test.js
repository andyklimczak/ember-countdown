import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

/**
 * NOTE: These tests specify an 'endDate' value in the component handlebars. This is only done in order to make the tests reliable.
 * In normal cases, you would not override 'endDate', and let it be defined as its default
 */
moduleForComponent('countdown-string', 'Integration | Component | countdown string', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{countdown-string startDate=657050213000 endDate=1463255482000}}`);
  assert.equal(this.$().text().trim(), '25 years, 6 months, 18 days, 1 hour, 54 minutes and 29 seconds');
});

test('it renders when setting the ember tagname', function(assert) {
  this.render(hbs`{{countdown-string startDate=657050213000 endDate=1463255482000 tagName="p"}}`);
  assert.equal(this.$('p').text().trim(), '25 years, 6 months, 18 days, 1 hour, 54 minutes and 29 seconds');
});

test('it renders with max', function(assert) {
  this.render(hbs`{{countdown-string startDate=657050213000 endDate=1463255482000 max=3}}`);
  assert.equal(this.$().text().trim(), '25 years, 6 months and 18 days');
});

test('it renders with fromNow suffix', function(assert) {
  this.render(hbs`{{countdown-string startDate=657050213000 endDate=1463255482000 suffix=true}}`);
  assert.equal(this.$().text().trim(), '25 years, 6 months, 18 days, 1 hour, 54 minutes and 29 seconds ago');
});

test('it renders with toNow suffix', function(assert) {
  this.render(hbs`{{countdown-string endDate="2015/04/20" startDate="2020/01/01" suffix=true}}`);
  assert.equal(this.$().text().trim(), '4 years, 8 months and 11 days left');
});

test('it renders without last label', function(assert) {
  this.render(hbs`{{countdown-string endDate="2015/04/20" startDate="2020/01/01" lastLabel=' '}}`);
  assert.equal(this.$().text().trim(), '4 years, 8 months 11 days');
});

test('it renders with overriding all the labels', function(assert) {
  this.render(hbs`{{countdown-string startDate=657050213000 endDate=1463255482000
              singularLabel=' milissegundo| segundo| minuto| hora| dia| semana| mês| ano| década| século| milênio'
              pluralLabel=' milissegundos| segundos| minutos| horas| dias| semanas| meses| anos| décadas| séculos| milênios'
              lastLabel=' e '
              delimLabel=' + '}}`);
  assert.equal(this.$().text().trim(), '25 anos + 6 meses + 18 dias + 1 hora + 54 minutos e 29 segundos');
});

test('it renders two instances with the correct labels for each', function(assert) {
  this.render(hbs`{{countdown-string endDate="2015/04/20" startDate="2020/01/01" lastLabel=' first '}}{{countdown-string endDate="2015/04/20" startDate="2020/01/01"  lastLabel=' second '}}`);
  assert.equal(this.$().text().trim(), '4 years, 8 months first 11 days\n4 years, 8 months second 11 days');
});
