package com.mitierrita.backend_turnos.service;

import com.mitierrita.backend_turnos.entity.Turno;
import com.mitierrita.backend_turnos.repository.TurnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TurnoService {

    @Autowired
    private TurnoRepository turnoRepository;

    public List<Turno> obtenerTurnos() {
        return turnoRepository.findAll();
    }

    public Turno guardarTurno(Turno turno) {
        if (turno.getNumeroTurno() == null || turno.getNumeroTurno().isEmpty()) {
            long count = turnoRepository.count();
            turno.setNumeroTurno(String.format("T-%03d", count + 1));
        }
        return turnoRepository.save(turno);
    }

    public Turno actualizarEstado(Long id, String estado) {
        Turno turno = turnoRepository.findById(id).orElseThrow();
        turno.setEstado(estado);
        return turnoRepository.save(turno);
    }
}