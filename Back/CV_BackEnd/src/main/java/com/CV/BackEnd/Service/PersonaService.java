/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.CV.BackEnd.Service;

import com.CV.BackEnd.Exception.ResourceNotFoundException;
import com.CV.BackEnd.Model.User;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.CV.BackEnd.Repository.UsuarioRepository;

/**
 *
 * @author leon
 */
@Service
public class UserService implements IUserService {
    
    private UsuarioRepository repo;
    @Override
    public List<User> getUsers() {
        List<User> list= repo.findAll();
        return list;
    }

    @Override
    public User saveUser(User user) {
        return repo.save(user);
    }

    @Override
    public ResponseEntity<User> findUser(Long id) {
        User user = repo.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("no existe el usuario con el id: " + id));
        return ResponseEntity.ok(user);
    }

    @Override
    public ResponseEntity<User> updateUser(Long id, User user) {
        User us = repo.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("no existe el usuario con el id: " + id));
        
        us.setDescripcion(user.getDescripcion());
        us.setNombreCompleto(user.getNombreCompleto());
        us.setTitulo(user.getTitulo());
        
        User userUpdated = repo.save(us);
        return ResponseEntity.ok(userUpdated);
    }

    @Override
    public ResponseEntity<Map<String, Boolean>> deleteUser(Long id) {
        User user = repo.findById(id)
				    .orElseThrow(() -> new ResourceNotFoundException("No existe el usuario con el ID : " + id));
		
		repo.delete(user);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar",Boolean.TRUE);
		return ResponseEntity.ok(respuesta); }
    
}
