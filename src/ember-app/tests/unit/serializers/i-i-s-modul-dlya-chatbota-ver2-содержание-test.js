import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-modul-dlya-chatbota-ver2-содержание', 'Unit | Serializer | i-i-s-modul-dlya-chatbota-ver2-содержание', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-modul-dlya-chatbota-ver2-содержание',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
