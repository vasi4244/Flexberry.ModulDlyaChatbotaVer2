import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  вариант_1: DS.attr('string'),
  вариант_2: DS.attr('string'),
  вариант_3: DS.attr('string'),
  вопрос: DS.attr('string'),
  настройкаОпр: DS.belongsTo('i-i-s-modul-dlya-chatbota-ver2-настройка-опр', { inverse: 'содержание', async: false })
});

export let ValidationRules = {
  вариант_1: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver2-содержание.validations.вариант_1.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  вариант_2: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver2-содержание.validations.вариант_2.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  вариант_3: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver2-содержание.validations.вариант_3.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  вопрос: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver2-содержание.validations.вопрос.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  настройкаОпр: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver2-содержание.validations.настройкаОпр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СодержаниеE', 'i-i-s-modul-dlya-chatbota-ver2-содержание', {
    вопрос: attr('Вопрос', { index: 0 }),
    вариант_2: attr('Вариант 1', { index: 1 }),
    вариант_3: attr('Вариант 2', { index: 2 }),
    вариант_1: attr('Вариант 3', { index: 3 })
  });
};
