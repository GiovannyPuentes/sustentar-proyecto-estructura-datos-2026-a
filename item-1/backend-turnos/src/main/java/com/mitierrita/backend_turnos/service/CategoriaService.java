package com.mitierrita.backend_turnos.service;

import com.mitierrita.backend_turnos.entity.Categoria;
import com.mitierrita.backend_turnos.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    public List<Categoria> obtenerCategorias() {
        return categoriaRepository.findAll();
    }

    public Categoria guardarCategoria(Categoria categoria) {
        if (categoria.getCodigoCategoria() == null || categoria.getCodigoCategoria().isEmpty()) {
            long count = categoriaRepository.count();
            categoria.setCodigoCategoria(String.format("CAT-%03d", count + 1));
        }
        return categoriaRepository.save(categoria);
    }
}