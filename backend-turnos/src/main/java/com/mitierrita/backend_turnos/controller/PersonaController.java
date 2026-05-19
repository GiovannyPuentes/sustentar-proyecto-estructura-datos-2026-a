package com.mitierrita.backend_turnos.controller;

import com.mitierrita.backend_turnos.entity.Persona;
import com.mitierrita.backend_turnos.service.PersonaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/personas")
@CrossOrigin(origins = "*")
public class PersonaController {

    @Autowired
    private PersonaService personaService;

    // LISTAR PERSONAS
    @GetMapping
    public List<Persona> obtenerPersonas() {
        return personaService.obtenerPersonas();
    }

    // GUARDAR PERSONA
    @PostMapping
    public Persona guardarPersona(@RequestBody Persona persona) {
        return personaService.guardarPersona(persona);
    }
}