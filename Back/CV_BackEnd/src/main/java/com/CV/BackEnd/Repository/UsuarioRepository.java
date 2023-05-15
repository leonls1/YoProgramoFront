/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.CV.BackEnd.Repository;

import com.CV.BackEnd.Model.Usuario_desfasado;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author leon
 */
public interface UsuarioRepository extends JpaRepository<Usuario_desfasado, Long>{
    Optional<Usuario_desfasado> findOneByEmail(String email);
}
