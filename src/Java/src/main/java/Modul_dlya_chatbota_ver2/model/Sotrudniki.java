package Modul_dlya_chatbota_ver2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Modul_dlya_chatbota_ver2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Сотрудники
 */
@Entity(name = "IISModul_dlya_chatbota_ver2Сотрудники")
@Table(schema = "public", name = "Сотрудники")
public class Sotrudniki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Фамилия")
    private String фамилия;

    @Column(name = "НомерПас")
    private Integer номерпас;

    @Column(name = "Отчество")
    private String отчество;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "СерияПас")
    private Integer серияпас;

    @Column(name = "ТабНомер")
    private Integer табномер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnost")
    @Convert("Dolzhnost")
    @Column(name = "Должность", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnost", insertable = false, updatable = false)
    private Dolzhnost dolzhnost;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Otdel")
    @Convert("Otdel")
    @Column(name = "Отдел", length = 16, unique = true, nullable = false)
    private UUID _otdelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Otdel", insertable = false, updatable = false)
    private Otdel otdel;


    public Sotrudniki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФамилия() {
      return фамилия;
    }

    public void setФамилия(String фамилия) {
      this.фамилия = фамилия;
    }

    public Integer getНомерПас() {
      return номерпас;
    }

    public void setНомерПас(Integer номерпас) {
      this.номерпас = номерпас;
    }

    public String getОтчество() {
      return отчество;
    }

    public void setОтчество(String отчество) {
      this.отчество = отчество;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }

    public Integer getСерияПас() {
      return серияпас;
    }

    public void setСерияПас(Integer серияпас) {
      this.серияпас = серияпас;
    }

    public Integer getТабНомер() {
      return табномер;
    }

    public void setТабНомер(Integer табномер) {
      this.табномер = табномер;
    }


}