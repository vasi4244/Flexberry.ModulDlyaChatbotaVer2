import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  опрос: DS.belongsTo('i-i-s-modul-dlya-chatbota-ver2-опрос', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-modul-dlya-chatbota-ver2-сотрудники', { inverse: null, async: false }),
  содержание: DS.hasMany('i-i-s-modul-dlya-chatbota-ver2-содержание', { inverse: 'настройкаОпр', async: false })
});

export let ValidationRules = {
  опрос: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver2-настройка-опр.validations.опрос.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver2-настройка-опр.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  содержание: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver2-настройка-опр.validations.содержание.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НастройкаОпрE', 'i-i-s-modul-dlya-chatbota-ver2-настройка-опр', {
    опрос: belongsTo('i-i-s-modul-dlya-chatbota-ver2-опрос', 'Опрос', {
      наименование: attr('Опрос', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'наименование' }),
    сотрудники: belongsTo('i-i-s-modul-dlya-chatbota-ver2-сотрудники', 'Сотрудники', {
      фамилия: attr('Ответственный', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фамилия' }),
    содержание: hasMany('i-i-s-modul-dlya-chatbota-ver2-содержание', 'Содержание', {
      вопрос: attr('Вопрос', { index: 0 }),
      вариант_2: attr('Вариант 1', { index: 1 }),
      вариант_3: attr('Вариант 2', { index: 2 }),
      вариант_1: attr('Вариант 3', { index: 3 })
    })
  });

  modelClass.defineProjection('НастройкаОпрL', 'i-i-s-modul-dlya-chatbota-ver2-настройка-опр', {
    опрос: belongsTo('i-i-s-modul-dlya-chatbota-ver2-опрос', 'Опрос', {
      наименование: attr('Опрос', { index: 0 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-modul-dlya-chatbota-ver2-сотрудники', 'Ответственный', {
      фамилия: attr('Ответственный', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
