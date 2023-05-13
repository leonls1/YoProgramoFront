/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Eje1.Ejercicio1.Services;

import java.util.List;
import com.Eje1.Ejercicio1.Models.Persona;

/**
 *
 * @author leon
 */
public interface IPersonaService {
    //metodo para traer a todas las personas existentes en la db
    public List<Persona> getPersonas();
    //Es el create/update para mi db persona
    public void savePersona(Persona per);
    
    public void deletePersona(Long id);
    //en contrar una persona en especifico
    public Persona findPersona(Long id);
}
