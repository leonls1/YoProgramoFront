/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SuperMarket.CRUD.Controller;

import com.SuperMarket.CRUD.Entity.Product;
import com.SuperMarket.CRUD.Service.IProductService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http//localhost:4200")
public class ProductController {
    
    @Autowired
    IProductService service;
    
    
    @GetMapping("/list")
    public List<Product> list(){
        return service.getAll();
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<Product> getOne(@PathVariable Long id){
        
        
        return service.getOne(id);
    }

}
