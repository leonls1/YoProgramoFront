/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SuperMarket.CRUD.Service;

import com.SuperMarket.CRUD.Entity.Product;
import com.SuperMarket.CRUD.Exception.ResourceNotFoundException;
import com.SuperMarket.CRUD.Repository.ProductRepository;
import jakarta.transaction.Transactional;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Transactional
@Service
public class ProductService implements IProductService{
    
    @Autowired
    ProductRepository repo;

    @Override
    public List<Product> getAll() {
     return repo.findAll();
    }

    @Override
    public Optional<Product> getByName(String name) {
        return repo.findByName(name);
    }

    @Override
    public ResponseEntity<Product> getOne(Long id) {
        Product pro = repo.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("No se ha encontrado el producto con el id "+ id));
        return ResponseEntity.ok(pro);
    }

    @Override
    public ResponseEntity<Product> update(Long id, Product product) {
        Product pro = repo.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("No se ha encontrado el producto con el id "+ id));
         
        pro.setName(product.getName());
        pro.setExpirationDate(product.getExpirationDate());
        pro.setPrice(product.getPrice());
        pro.setType(product.getType());
        
        Product updatedProduct = repo.save(pro);
        return ResponseEntity.ok(updatedProduct);
        
    }

    @Override
    public Product save(Product product) {
        return repo.save(product);
    }

    @Override
    public ResponseEntity<Map<String, Boolean>> delete(Long id) {
       Product pro = repo.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("No se ha encontrado el producto con el id "+ id));
       Map<String, Boolean> response = new HashMap<>();
       response.put("eliminar",Boolean.TRUE);
       return ResponseEntity.ok(response);
    }

    @Override
    public boolean existById(Long id) {
        return repo.existsById(id);
    }

    @Override
    public boolean existByName(String name) {
       return repo.existByName(name);
    }

    
}
