package Modul_dlya_chatbota_ver2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Modul_dlya_chatbota_ver2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Список
 */
@Entity(name = "IISModul_dlya_chatbota_ver2Список")
@Table(schema = "public", name = "Список")
public class Spisok {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Anketirovanie")
    @Convert("Anketirovanie")
    @Column(name = "Анкетирование", length = 16, unique = true, nullable = false)
    private UUID _anketirovanieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Anketirovanie", insertable = false, updatable = false)
    private Anketirovanie anketirovanie;


    public Spisok() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}