package com.mitierrita.backend_turnos.repository;

import com.mitierrita.backend_turnos.entity.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
}