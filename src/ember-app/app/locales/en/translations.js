import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISModul_dlya_chatbota_ver2АнкетированиеLForm from './forms/i-i-s-modul-dlya-chatbota-ver2-анкетирование-l';
import IISModul_dlya_chatbota_ver2ДолжностьLForm from './forms/i-i-s-modul-dlya-chatbota-ver2-должность-l';
import IISModul_dlya_chatbota_ver2НастройкаОпрLForm from './forms/i-i-s-modul-dlya-chatbota-ver2-настройка-опр-l';
import IISModul_dlya_chatbota_ver2ОпросLForm from './forms/i-i-s-modul-dlya-chatbota-ver2-опрос-l';
import IISModul_dlya_chatbota_ver2ОтделLForm from './forms/i-i-s-modul-dlya-chatbota-ver2-отдел-l';
import IISModul_dlya_chatbota_ver2СотрудникиLForm from './forms/i-i-s-modul-dlya-chatbota-ver2-сотрудники-l';
import IISModul_dlya_chatbota_ver2АнкетированиеEForm from './forms/i-i-s-modul-dlya-chatbota-ver2-анкетирование-e';
import IISModul_dlya_chatbota_ver2ДолжностьEForm from './forms/i-i-s-modul-dlya-chatbota-ver2-должность-e';
import IISModul_dlya_chatbota_ver2НастройкаОпрEForm from './forms/i-i-s-modul-dlya-chatbota-ver2-настройка-опр-e';
import IISModul_dlya_chatbota_ver2ОпросEForm from './forms/i-i-s-modul-dlya-chatbota-ver2-опрос-e';
import IISModul_dlya_chatbota_ver2ОтделEForm from './forms/i-i-s-modul-dlya-chatbota-ver2-отдел-e';
import IISModul_dlya_chatbota_ver2СотрудникиEForm from './forms/i-i-s-modul-dlya-chatbota-ver2-сотрудники-e';
import IISModul_dlya_chatbota_ver2АнкетированиеModel from './models/i-i-s-modul-dlya-chatbota-ver2-анкетирование';
import IISModul_dlya_chatbota_ver2ДолжностьModel from './models/i-i-s-modul-dlya-chatbota-ver2-должность';
import IISModul_dlya_chatbota_ver2НастройкаОпрModel from './models/i-i-s-modul-dlya-chatbota-ver2-настройка-опр';
import IISModul_dlya_chatbota_ver2ОпросModel from './models/i-i-s-modul-dlya-chatbota-ver2-опрос';
import IISModul_dlya_chatbota_ver2ОтделModel from './models/i-i-s-modul-dlya-chatbota-ver2-отдел';
import IISModul_dlya_chatbota_ver2СодержаниеModel from './models/i-i-s-modul-dlya-chatbota-ver2-содержание';
import IISModul_dlya_chatbota_ver2СотрудникиModel from './models/i-i-s-modul-dlya-chatbota-ver2-сотрудники';
import IISModul_dlya_chatbota_ver2СписокModel from './models/i-i-s-modul-dlya-chatbota-ver2-список';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-modul-dlya-chatbota-ver2-анкетирование': IISModul_dlya_chatbota_ver2АнкетированиеModel,
    'i-i-s-modul-dlya-chatbota-ver2-должность': IISModul_dlya_chatbota_ver2ДолжностьModel,
    'i-i-s-modul-dlya-chatbota-ver2-настройка-опр': IISModul_dlya_chatbota_ver2НастройкаОпрModel,
    'i-i-s-modul-dlya-chatbota-ver2-опрос': IISModul_dlya_chatbota_ver2ОпросModel,
    'i-i-s-modul-dlya-chatbota-ver2-отдел': IISModul_dlya_chatbota_ver2ОтделModel,
    'i-i-s-modul-dlya-chatbota-ver2-содержание': IISModul_dlya_chatbota_ver2СодержаниеModel,
    'i-i-s-modul-dlya-chatbota-ver2-сотрудники': IISModul_dlya_chatbota_ver2СотрудникиModel,
    'i-i-s-modul-dlya-chatbota-ver2-список': IISModul_dlya_chatbota_ver2СписокModel
  },

  'application-name': 'Modul_dlya_chatbota_ver2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Modul_dlya_chatbota_ver2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Modul_dlya_chatbota_ver2',
          title: 'Modul_dlya_chatbota_ver2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        кадры: {
          caption: 'Кадры',
          title: 'Кадры',
          'i-i-s-modul-dlya-chatbota-ver2-отдел-l': {
            caption: 'Отдел',
            title: ''
          },
          'i-i-s-modul-dlya-chatbota-ver2-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-modul-dlya-chatbota-ver2-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        },
        'модуль-для-чат-бота': {
          caption: 'Модуль для чат-бота',
          title: 'Модуль для чат-бота',
          'i-i-s-modul-dlya-chatbota-ver2-анкетирование-l': {
            caption: 'Анкетирование',
            title: ''
          },
          'i-i-s-modul-dlya-chatbota-ver2-опрос-l': {
            caption: 'Опрос',
            title: ''
          },
          'i-i-s-modul-dlya-chatbota-ver2-настройка-опр-l': {
            caption: 'Настройка опр',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-modul-dlya-chatbota-ver2-анкетирование-l': IISModul_dlya_chatbota_ver2АнкетированиеLForm,
    'i-i-s-modul-dlya-chatbota-ver2-должность-l': IISModul_dlya_chatbota_ver2ДолжностьLForm,
    'i-i-s-modul-dlya-chatbota-ver2-настройка-опр-l': IISModul_dlya_chatbota_ver2НастройкаОпрLForm,
    'i-i-s-modul-dlya-chatbota-ver2-опрос-l': IISModul_dlya_chatbota_ver2ОпросLForm,
    'i-i-s-modul-dlya-chatbota-ver2-отдел-l': IISModul_dlya_chatbota_ver2ОтделLForm,
    'i-i-s-modul-dlya-chatbota-ver2-сотрудники-l': IISModul_dlya_chatbota_ver2СотрудникиLForm,
    'i-i-s-modul-dlya-chatbota-ver2-анкетирование-e': IISModul_dlya_chatbota_ver2АнкетированиеEForm,
    'i-i-s-modul-dlya-chatbota-ver2-должность-e': IISModul_dlya_chatbota_ver2ДолжностьEForm,
    'i-i-s-modul-dlya-chatbota-ver2-настройка-опр-e': IISModul_dlya_chatbota_ver2НастройкаОпрEForm,
    'i-i-s-modul-dlya-chatbota-ver2-опрос-e': IISModul_dlya_chatbota_ver2ОпросEForm,
    'i-i-s-modul-dlya-chatbota-ver2-отдел-e': IISModul_dlya_chatbota_ver2ОтделEForm,
    'i-i-s-modul-dlya-chatbota-ver2-сотрудники-e': IISModul_dlya_chatbota_ver2СотрудникиEForm
  },

});

export default translations;
