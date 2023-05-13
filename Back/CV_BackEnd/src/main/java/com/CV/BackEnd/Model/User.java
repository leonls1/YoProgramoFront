/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.CV.BackEnd.Model;

/**
 *
 * @author leon
 */
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "usuario")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombreCompleto")
    private String nombreCompleto;
    
    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "titulo")
    private String titulo;

    public User() {
    }

    public User(Long id, String nombreCompleto, String descripcion, String titulo) {
        this.id = id;
        this.nombreCompleto = nombreCompleto;
        this.descripcion = descripcion;
        this.titulo = titulo;
    }
    
    

}
