import {
  defineNamespace,
  defineProjections,
  Model as ОтделMixin
} from '../mixins/regenerated/models/i-i-s-modul-dlya-chatbota-ver2-отдел';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтделMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
