import {
  defineNamespace,
  defineProjections,
  Model as СодержаниеMixin
} from '../mixins/regenerated/models/i-i-s-modul-dlya-chatbota-ver2-содержание';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СодержаниеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
