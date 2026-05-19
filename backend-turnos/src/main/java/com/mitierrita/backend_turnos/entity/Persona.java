package com.mitierrita.backend_turnos.entity;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "persona")
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonProperty("codigo_persona")
    @Column(name = "codigo_persona", nullable = false, unique = true)
    private String codigoPersona;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false, unique = true)
    private String correo;

    @JsonProperty("numero_documento")
    @Column(name = "numero_documento", nullable = false, unique = true)
    private String numeroDocumento;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCodigoPersona() { return codigoPersona; }
    public void setCodigoPersona(String codigoPersona) { this.codigoPersona = codigoPersona; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getCorreo() { return correo; }
    public void setCorreo(String correo) { this.correo = correo; }

    public String getNumeroDocumento() { return numeroDocumento; }
    public void setNumeroDocumento(String numeroDocumento) { this.numeroDocumento = numeroDocumento; }
}   