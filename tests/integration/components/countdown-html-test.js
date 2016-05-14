import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('countdown-html', 'Integration | Component | countdown html', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{countdown-html startDate=657050213000 endDate=1463255482000 interval=0}}`);
  assert.equal(this.$('div').html().trim(), '<span>25 years</span>, <span>6 months</span>, <span>18 days</span>, <span>1 hour</span>, <span>54 minutes</span> and <span>29 seconds</span>');
});

test('it renders with max', function(assert) {
  this.render(hbs`{{countdown-html startDate=657050213000 endDate=1463255482000 interval=0 max=3}}`);
  assert.equal(this.$('div').html().trim(), '<span>25 years</span>, <span>6 months</span> and <span>18 days</span>');
});

test('it renders with fromNow suffix', function(assert) {
  this.render(hbs`{{countdown-html startDate=657050213000 endDate=1463255482000 interval=0 suffix=true}}`);
  assert.equal(this.$('div').html().trim(), '<span>25 years</span>, <span>6 months</span>, <span>18 days</span>, <span>1 hour</span>, <span>54 minutes</span> and <span>29 seconds</span> ago');
});

test('it renders with toNow suffix', function(assert) {
  this.render(hbs`{{countdown-html endDate="2015/04/20" startDate="2020/01/01" interval=0 suffix=true}}`);
  assert.equal(this.$('div').html().trim(), '<span>4 years</span>, <span>8 months</span> and <span>11 days</span> left');
});

test('it renders with specified tag', function(assert) {
  this.render(hbs`{{countdown-html startDate=657050213000 endDate=1463255482000 interval=0 htmlTag='p'}}`);
  assert.equal(this.$('div').html().trim(), '<p>25 years</p>, <p>6 months</p>, <p>18 days</p>, <p>1 hour</p>, <p>54 minutes</p> and <p>29 seconds</p>');
});

test('it renders without last label', function(assert) {
  this.render(hbs`{{countdown-html startDate=657050213000 endDate=1463255482000 interval=0 lastLabel=' '}}`);
  assert.equal(this.$('div').html().trim(), '<span>25 years</span>, <span>6 months</span>, <span>18 days</span>, <span>1 hour</span>, <span>54 minutes</span> <span>29 seconds</span>');
});

test('it renders with overriding all the labels', function(assert) {
  this.render(hbs`{{countdown-html startDate=657050213000 endDate=1463255482000 interval=0
              singularLabel=' milissegundo| segundo| minuto| hora| dia| semana| mês| ano| década| século| milênio'
              pluralLabel=' milissegundos| segundos| minutos| horas| dias| semanas| meses| anos| décadas| séculos| milênios'
              lastLabel=' e '
              delimLabel=' + '}}`);
  assert.equal(this.$('div').html().trim(), '<span>25 anos</span> + <span>6 meses</span> + <span>18 dias</span> + <span>1 hora</span> + <span>54 minutos</span> e <span>29 segundos</span>');
});

  test('it renders two instances with the correct labels for each', function(assert) {
  this.render(hbs`{{countdown-html startDate=657050213000 endDate=1463255482000 interval=0 lastLabel=' first '}}{{countdown-html startDate=657050213000 endDate=1463255482000 interval=0 lastLabel=' second '}}`);
  assert.equal(this.$().text().trim(), '25 years, 6 months, 18 days, 1 hour, 54 minutes first 29 seconds\n25 years, 6 months, 18 days, 1 hour, 54 minutes second 29 seconds');
});
