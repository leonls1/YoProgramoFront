/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.CV.BackEnd.Security.Service;

import com.CV.BackEnd.Security.Entity.Rol;
import com.CV.BackEnd.Security.Enums.RolNombre;
import com.CV.BackEnd.Security.Repository.RolRepository;
import jakarta.transaction.Transactional;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class RolService {
    
    @Autowired
    RolRepository repo;
    
    public Optional<Rol> getByRolNombre(RolNombre rolNom) {
        return repo.findRolByName(rolNom);
    }
}
