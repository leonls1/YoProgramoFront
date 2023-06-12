/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Practica.reposteria.Model;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author leon
 */
@Getter@Setter
public class ingrediente {
    private boolean sinGluten;
    private String nombre;

    public ingrediente(boolean sinGluten, String nombre) {
        this.sinGluten = sinGluten;
        this.nombre = nombre;
    }
    
}
