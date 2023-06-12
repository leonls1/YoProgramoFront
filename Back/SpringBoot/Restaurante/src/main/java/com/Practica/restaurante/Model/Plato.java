/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Practica.restaurante.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Plato {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE)
    //ID, nombre, precio, descripcion
    private Long id;
    private String nombre;
    private int precio;
    private String descripcion;
    
}
