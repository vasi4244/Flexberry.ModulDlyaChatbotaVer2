import { Serializer as АнкетированиеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-modul-dlya-chatbota-ver2-анкетирование';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(АнкетированиеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
