/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.CV.BackEnd.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author leon
 */
@Getter
@Setter
@Entity
@Table(name="Educacion")
public class Education {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
    @Column(name="fechaInicio")
    private String fechaInicio;
    
    @Column(name="fechaFin")
    private String fechaFin;
    
    @Column(name="nombreLugar")
    private String nombreLugar;
    
    @Column(name="tituloCarrera")
    private String tituloCarrera;
    
    @Column(name="descripcion")
    private String descripcion;

    public Education(Long id, String fechaInicio, String fechaFin, String nombreLugar, String tituloCarrera, String descripcion) {
        this.id = id;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.nombreLugar = nombreLugar;
        this.tituloCarrera = tituloCarrera;
        this.descripcion = descripcion;
    }

    public Education() {
    }
}
