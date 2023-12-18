import { Serializer as ОтделSerializer } from
  '../mixins/regenerated/serializers/i-i-s-modul-dlya-chatbota-ver2-отдел';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОтделSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
