import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  номерПас: DS.attr('number'),
  отчество: DS.attr('string'),
  серияПас: DS.attr('number'),
  табНомер: DS.attr('number'),
  фамилия: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-modul-dlya-chatbota-ver2-должность', { inverse: null, async: false }),
  отдел: DS.belongsTo('i-i-s-modul-dlya-chatbota-ver2-отдел', { inverse: null, async: false })
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver2-сотрудники.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерПас: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver2-сотрудники.validations.номерПас.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver2-сотрудники.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серияПас: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver2-сотрудники.validations.серияПас.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  табНомер: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver2-сотрудники.validations.табНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver2-сотрудники.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver2-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отдел: {
    descriptionKey: 'models.i-i-s-modul-dlya-chatbota-ver2-сотрудники.validations.отдел.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-modul-dlya-chatbota-ver2-сотрудники', {
    фамилия: attr('Фамилия', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    номерПас: attr('Номер паспорта', { index: 3 }),
    серияПас: attr('Серия паспорта', { index: 4 }),
    табНомер: attr('Таб номер', { index: 5 }),
    должность: belongsTo('i-i-s-modul-dlya-chatbota-ver2-должность', 'Должность', {
      наименование: attr('Должность', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наименование' }),
    отдел: belongsTo('i-i-s-modul-dlya-chatbota-ver2-отдел', 'Отдел', {
      наименование: attr('Отдел', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-modul-dlya-chatbota-ver2-сотрудники', {
    фамилия: attr('Фамилия', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    номерПас: attr('Номер паспорта', { index: 3 }),
    серияПас: attr('Серия паспорта', { index: 4 }),
    табНомер: attr('Табельный номер', { index: 5 }),
    должность: belongsTo('i-i-s-modul-dlya-chatbota-ver2-должность', 'Должность', {
      наименование: attr('Должность', { index: 6 })
    }, { index: -1, hidden: true }),
    отдел: belongsTo('i-i-s-modul-dlya-chatbota-ver2-отдел', 'Отдел', {
      наименование: attr('Отдел', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
