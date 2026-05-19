package com.mitierrita.backend_turnos.controller;

import com.mitierrita.backend_turnos.entity.Turno;
import com.mitierrita.backend_turnos.service.TurnoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/turnos")
@CrossOrigin(origins = "*")
public class TurnoController {

    @Autowired
    private TurnoService turnoService;

    @GetMapping
    public List<Turno> obtenerTurnos() {
        return turnoService.obtenerTurnos();
    }

    @PostMapping
    public Turno guardarTurno(@RequestBody Turno turno) {
        return turnoService.guardarTurno(turno);
    }

    @PutMapping("/{id}/estado")
    public Turno actualizarEstado(@PathVariable Long id, @RequestBody String estado) {
        return turnoService.actualizarEstado(id, estado);
    }
}