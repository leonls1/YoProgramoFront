/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SuperMarket.CRUD.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Date;
import lombok.Data;

/**
 *
 * @author leon
 */
@Entity
@Data
@Table (name = "super_market")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    
    @Column(name = "price")
    private float price;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "expirationDate")
    private Date expirationDate;
    
    @Column(name = "type")
    private int type;

    public Product() {
    }

    public Product(float price, String name, Date expirationDate, int type) {
        this.price = price;
        this.name = name;
        this.expirationDate = expirationDate;
        this.type = type;
    }
    
    
    
    
    
}
