package com.mitierrita.backend_turnos.repository;

import com.mitierrita.backend_turnos.entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, Long> {

}