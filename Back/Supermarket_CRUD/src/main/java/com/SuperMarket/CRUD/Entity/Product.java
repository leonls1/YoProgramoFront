/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SuperMarket.CRUD.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;
import java.util.Date;
import lombok.Data;

@Entity
@Table(name = "product")
@Data
public class Product {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)        
    private Long id ;
    
    private String name;
    
    private float price;
    
    private int type;
    
   // private LocalDate expirationDate;

    public Product() {
    }

    public Product(String name, float price, int type) {
        this.name = name;
        this.price = price;
        this.type = type;
        //this.expirationDate = expirationDate;
    }
            
  
       
}
