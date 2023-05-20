/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.CV.BackEnd.Security.Service;

import com.CV.BackEnd.Security.Entity.Usuario;
import com.CV.BackEnd.Security.Repository.UsuarioRepository;
import jakarta.transaction.Transactional;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UsuarioService {
    @Autowired
    UsuarioRepository repo;
    
    public Optional<Usuario> getByNombreUsuario(String nomUsuario){
        return repo.findByNombreUsuario(nomUsuario);
    }
    
    public boolean existByNombreUsuario(String nomUsuario){
        return repo.existByNombreUsuario(nomUsuario);
    }
    
    public boolean existByEmailUsuario(String email){
        return repo.existByEmailUsuario(email);
    }
    
    public void save(Usuario usuario){
        repo.save(usuario);
    }
}
