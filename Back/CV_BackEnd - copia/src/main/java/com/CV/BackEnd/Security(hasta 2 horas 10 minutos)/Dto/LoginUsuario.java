/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.CV.BackEnd.Security.Dto;

import jakarta.validation.constraints.NotBlank;

/**
 *
 * @author leon
 */
public class LoginUsuario {
    @NotBlank //los campos no pueden estar vacios
    private String nombreUsuario;    
    @NotBlank
    private String pasword;

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getPasword() {
        return pasword;
    }

    public void setPasword(String pasword) {
        this.pasword = pasword;
    }
    
    
}
