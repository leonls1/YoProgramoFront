/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.SuperMarket.CRUD.Repository;

import com.SuperMarket.CRUD.Entity.Product;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{
    Optional<Product> findByName(String name); //buscar un producto en base al nombre recibido
    
    boolean existsByName(String nombre); //verificar si un producto existe
}
