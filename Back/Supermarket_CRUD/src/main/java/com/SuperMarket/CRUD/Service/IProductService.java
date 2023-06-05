/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.SuperMarket.CRUD.Service;

import com.SuperMarket.CRUD.Entity.Product;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.http.ResponseEntity;

/**
 *
 * @author leon
 */
public interface IProductService {
    
    public List<Product> getAll();
    
    public Optional<Product> getByName(String name);
    
    public ResponseEntity<Product> getOne(Long id);
    
    public ResponseEntity<Product> update(Long id, Product product);
    
    public Product save(Product product);
    
    public ResponseEntity<Map<String, Boolean>> delete(Long id);
  
    public boolean existById(Long id);
    
    public boolean existByName(String name);
}
