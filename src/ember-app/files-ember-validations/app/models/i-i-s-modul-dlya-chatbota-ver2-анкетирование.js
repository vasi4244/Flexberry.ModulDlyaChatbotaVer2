import {
  defineNamespace,
  defineProjections,
  Model as АнкетированиеMixin
} from '../mixins/regenerated/models/i-i-s-modul-dlya-chatbota-ver2-анкетирование';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АнкетированиеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
