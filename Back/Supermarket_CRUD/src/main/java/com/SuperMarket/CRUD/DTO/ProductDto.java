/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SuperMarket.CRUD.DTO;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import java.util.Date;
import lombok.Data;

@Data
public class ProductDto {
    @Min(0)
    private Float price;
    @NotBlank
    private String name;
    
   // private Date expirationDate;
    
    private int type;

    public ProductDto(Float price, String name,  int type) {
        this.price = price;
        this.name = name;        
        this.type = type;
        //this.expirationDate = expirationDate;
    }

    
    
    
}
