/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.CV.BackEnd.DTO;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class dtoExperience {

     
    @NotBlank
    private String fechaInicio;

    @NotBlank
    private String fechaFin;
    
    @NotBlank
    private String nombreEmpresa;
    
    @NotBlank
    private String rol;
    
    @NotBlank
    private String descripcion;

    public dtoExperience() {
    }

    public dtoExperience(String fechaInicio, String fechaFin, String nombreEmpresa, String rol, String descripcion) {
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.nombreEmpresa = nombreEmpresa;
        this.rol = rol;
        this.descripcion = descripcion;
    }
    
    
}
