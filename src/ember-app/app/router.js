import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-modul-dlya-chatbota-ver2-анкетирование-l');
  this.route('i-i-s-modul-dlya-chatbota-ver2-анкетирование-e',
  { path: 'i-i-s-modul-dlya-chatbota-ver2-анкетирование-e/:id' });
  this.route('i-i-s-modul-dlya-chatbota-ver2-анкетирование-e.new',
  { path: 'i-i-s-modul-dlya-chatbota-ver2-анкетирование-e/new' });
  this.route('i-i-s-modul-dlya-chatbota-ver2-должность-l');
  this.route('i-i-s-modul-dlya-chatbota-ver2-должность-e',
  { path: 'i-i-s-modul-dlya-chatbota-ver2-должность-e/:id' });
  this.route('i-i-s-modul-dlya-chatbota-ver2-должность-e.new',
  { path: 'i-i-s-modul-dlya-chatbota-ver2-должность-e/new' });
  this.route('i-i-s-modul-dlya-chatbota-ver2-настройка-опр-l');
  this.route('i-i-s-modul-dlya-chatbota-ver2-настройка-опр-e',
  { path: 'i-i-s-modul-dlya-chatbota-ver2-настройка-опр-e/:id' });
  this.route('i-i-s-modul-dlya-chatbota-ver2-настройка-опр-e.new',
  { path: 'i-i-s-modul-dlya-chatbota-ver2-настройка-опр-e/new' });
  this.route('i-i-s-modul-dlya-chatbota-ver2-опрос-l');
  this.route('i-i-s-modul-dlya-chatbota-ver2-опрос-e',
  { path: 'i-i-s-modul-dlya-chatbota-ver2-опрос-e/:id' });
  this.route('i-i-s-modul-dlya-chatbota-ver2-опрос-e.new',
  { path: 'i-i-s-modul-dlya-chatbota-ver2-опрос-e/new' });
  this.route('i-i-s-modul-dlya-chatbota-ver2-отдел-l');
  this.route('i-i-s-modul-dlya-chatbota-ver2-отдел-e',
  { path: 'i-i-s-modul-dlya-chatbota-ver2-отдел-e/:id' });
  this.route('i-i-s-modul-dlya-chatbota-ver2-отдел-e.new',
  { path: 'i-i-s-modul-dlya-chatbota-ver2-отдел-e/new' });
  this.route('i-i-s-modul-dlya-chatbota-ver2-сотрудники-l');
  this.route('i-i-s-modul-dlya-chatbota-ver2-сотрудники-e',
  { path: 'i-i-s-modul-dlya-chatbota-ver2-сотрудники-e/:id' });
  this.route('i-i-s-modul-dlya-chatbota-ver2-сотрудники-e.new',
  { path: 'i-i-s-modul-dlya-chatbota-ver2-сотрудники-e/new' });
});

export default Router;
