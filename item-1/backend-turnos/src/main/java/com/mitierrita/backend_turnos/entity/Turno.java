package com.mitierrita.backend_turnos.entity;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "turno")
public class Turno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonProperty("numero_turno")
    @Column(name = "numero_turno", nullable = false, unique = true)
    private String numeroTurno;

    @JsonProperty("persona_id")
    @Column(name = "persona_id", nullable = false)
    private Long personaId;

    @JsonProperty("categoria_turno_id")
    @Column(name = "categoria_turno_id", nullable = false)
    private Long categoriaTurnoId;

    @Column(nullable = false)
    private String estado;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNumeroTurno() { return numeroTurno; }
    public void setNumeroTurno(String numeroTurno) { this.numeroTurno = numeroTurno; }

    public Long getPersonaId() { return personaId; }
    public void setPersonaId(Long personaId) { this.personaId = personaId; }

    public Long getCategoriaTurnoId() { return categoriaTurnoId; }
    public void setCategoriaTurnoId(Long categoriaTurnoId) { this.categoriaTurnoId = categoriaTurnoId; }

    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
}