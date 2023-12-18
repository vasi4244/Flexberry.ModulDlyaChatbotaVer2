import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.кадры.caption'),
          title: i18n.t('forms.application.sitemap.кадры.title'),
          children: [{
            link: 'i-i-s-modul-dlya-chatbota-ver2-отдел-l',
            caption: i18n.t('forms.application.sitemap.кадры.i-i-s-modul-dlya-chatbota-ver2-отдел-l.caption'),
            title: i18n.t('forms.application.sitemap.кадры.i-i-s-modul-dlya-chatbota-ver2-отдел-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-modul-dlya-chatbota-ver2-должность-l',
            caption: i18n.t('forms.application.sitemap.кадры.i-i-s-modul-dlya-chatbota-ver2-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.кадры.i-i-s-modul-dlya-chatbota-ver2-должность-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-modul-dlya-chatbota-ver2-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.кадры.i-i-s-modul-dlya-chatbota-ver2-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.кадры.i-i-s-modul-dlya-chatbota-ver2-сотрудники-l.title'),
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.модуль-для-чат-бота.caption'),
          title: i18n.t('forms.application.sitemap.модуль-для-чат-бота.title'),
          children: [{
            link: 'i-i-s-modul-dlya-chatbota-ver2-анкетирование-l',
            caption: i18n.t('forms.application.sitemap.модуль-для-чат-бота.i-i-s-modul-dlya-chatbota-ver2-анкетирование-l.caption'),
            title: i18n.t('forms.application.sitemap.модуль-для-чат-бота.i-i-s-modul-dlya-chatbota-ver2-анкетирование-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-modul-dlya-chatbota-ver2-опрос-l',
            caption: i18n.t('forms.application.sitemap.модуль-для-чат-бота.i-i-s-modul-dlya-chatbota-ver2-опрос-l.caption'),
            title: i18n.t('forms.application.sitemap.модуль-для-чат-бота.i-i-s-modul-dlya-chatbota-ver2-опрос-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-modul-dlya-chatbota-ver2-настройка-опр-l',
            caption: i18n.t('forms.application.sitemap.модуль-для-чат-бота.i-i-s-modul-dlya-chatbota-ver2-настройка-опр-l.caption'),
            title: i18n.t('forms.application.sitemap.модуль-для-чат-бота.i-i-s-modul-dlya-chatbota-ver2-настройка-опр-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})