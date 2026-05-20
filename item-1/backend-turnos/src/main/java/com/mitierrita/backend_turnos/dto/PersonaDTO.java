package com.mitierrita.backend_turnos.dto;

public class PersonaDTO {

    private String codigo_persona;
    private String nombre;
    private String correo;
    private String numero_documento;

    public PersonaDTO() {
    }

    public String getCodigo_persona() {
        return codigo_persona;
    }

    public void setCodigo_persona(String codigo_persona) {
        this.codigo_persona = codigo_persona;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getNumero_documento() {
        return numero_documento;
    }

    public void setNumero_documento(String numero_documento) {
        this.numero_documento = numero_documento;
    }
}