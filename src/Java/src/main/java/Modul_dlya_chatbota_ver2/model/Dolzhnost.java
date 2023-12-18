package Modul_dlya_chatbota_ver2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Modul_dlya_chatbota_ver2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Должность
 */
@Entity(name = "IISModul_dlya_chatbota_ver2Должность")
@Table(schema = "public", name = "Должность")
public class Dolzhnost {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодДол")
    private Integer коддол;

    @Column(name = "Наименование")
    private String наименование;


    public Dolzhnost() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодДол() {
      return коддол;
    }

    public void setКодДол(Integer коддол) {
      this.коддол = коддол;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }


}