/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Eje1.Ejercicio1.Services;

import java.util.List;
import com.Eje1.Ejercicio1.Models.Persona;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Eje1.Ejercicio1.Repository.PersonaRepository;

@Service
public class PersonaService implements IPersonaService{
    
    @Autowired
    private PersonaRepository perRepository;

    @Override
    public List<Persona> getPersonas() {
      List<Persona> listPers = perRepository.findAll();
      return listPers; //trae una lista desde la db y a devuelve
    }

    @Override
    public void savePersona(Persona per) {
        perRepository.save(per); 
    }

    @Override
    public void deletePersona(Long id) {
        perRepository.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
        Persona per = perRepository.findById(id).orElse(null); //va  a buscar la persona y de no encontrarla retornara un null, por eso el orElse
        return per;        
    }
}
