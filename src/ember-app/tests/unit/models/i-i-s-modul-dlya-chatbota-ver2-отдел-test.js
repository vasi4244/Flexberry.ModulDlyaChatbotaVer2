import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-modul-dlya-chatbota-ver2-отдел', 'Unit | Model | i-i-s-modul-dlya-chatbota-ver2-отдел', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-modul-dlya-chatbota-ver2-анкетирование',
    'model:i-i-s-modul-dlya-chatbota-ver2-должность',
    'model:i-i-s-modul-dlya-chatbota-ver2-настройка-опр',
    'model:i-i-s-modul-dlya-chatbota-ver2-опрос',
    'model:i-i-s-modul-dlya-chatbota-ver2-отдел',
    'model:i-i-s-modul-dlya-chatbota-ver2-содержание',
    'model:i-i-s-modul-dlya-chatbota-ver2-сотрудники',
    'model:i-i-s-modul-dlya-chatbota-ver2-список',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
