/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.CV.BackEnd.Service;


import com.CV.BackEnd.Model.User;
import java.util.List;
import java.util.Map;
import org.springframework.http.ResponseEntity;

/**
 *
 * @author leon
 */
public interface IUserService {
   public List<User> getUsers();
    
    public User saveUser(User user);

    public ResponseEntity<User> findUser(Long id);

    public ResponseEntity<User> updateUser(Long id, User user);

    public ResponseEntity<Map<String, Boolean>> deleteUser(Long id); 
}
