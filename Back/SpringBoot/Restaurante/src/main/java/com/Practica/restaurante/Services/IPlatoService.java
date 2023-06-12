/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Practica.restaurante.Services;

import com.Practica.restaurante.Model.Plato;
import java.util.List;

/**
 *
 * @author leon
 */
public interface IPlatoService {
    public List<Plato> getPlatos(); 
    public void createPlato(Plato platito) ;
    public void deletePlato(Long id);
    public Plato findPlato(Long id);
            
}
