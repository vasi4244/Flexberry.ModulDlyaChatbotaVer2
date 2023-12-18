import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СписокMixin
} from '../mixins/regenerated/models/i-i-s-modul-dlya-chatbota-ver2-список';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СписокMixin, Validations, {
});

defineProjections(Model);

export default Model;
