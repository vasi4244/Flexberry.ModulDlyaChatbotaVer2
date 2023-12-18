import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодОпроса: DS.attr('number'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  кодОпроса: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver2-опрос.validations.кодОпроса.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver2-опрос.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОпросE', 'i-i-s-modul-dlya-chatbota-ver2-опрос', {
    наименование: attr('Наименование', { index: 0 }),
    кодОпроса: attr('Код опроса', { index: 1 })
  });

  modelClass.defineProjection('ОпросL', 'i-i-s-modul-dlya-chatbota-ver2-опрос', {
    наименование: attr('Наименование', { index: 0 }),
    кодОпроса: attr('Код опроса', { index: 1 })
  });
};
