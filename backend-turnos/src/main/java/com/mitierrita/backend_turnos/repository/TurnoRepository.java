package com.mitierrita.backend_turnos.repository;

import com.mitierrita.backend_turnos.entity.Turno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TurnoRepository extends JpaRepository<Turno, Long> {
}