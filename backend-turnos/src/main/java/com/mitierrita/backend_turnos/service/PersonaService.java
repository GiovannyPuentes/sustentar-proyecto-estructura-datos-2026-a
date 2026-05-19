package com.mitierrita.backend_turnos.service;

import com.mitierrita.backend_turnos.entity.Persona;
import com.mitierrita.backend_turnos.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PersonaService {

    @Autowired
    private PersonaRepository personaRepository;

    public List<Persona> obtenerPersonas() {
        return personaRepository.findAll();
    }

    public Persona guardarPersona(Persona persona) {
        if (persona.getCodigoPersona() == null || persona.getCodigoPersona().isEmpty()) {
            long count = personaRepository.count();
            persona.setCodigoPersona(String.format("CLI-%03d", count + 1));
        }
        return personaRepository.save(persona);
    }
}