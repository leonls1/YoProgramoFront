/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Eje1.Ejercicio1.Controller;

import java.util.List;
import com.Eje1.Ejercicio1.Models.Persona;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.Eje1.Ejercicio1.Services.IPersonaService;

@RestController
public class PersonaController {
    
    @Autowired
    private IPersonaService personaService;
    
    @GetMapping("personas/traer") //definiendo cual sera la url para ingresar al metodo de abajo
    public List<Persona> getPersonas(){
        List<Persona> listPersonas= personaService.getPersonas();
        return listPersonas;
    }
    
    @PostMapping("personas/crear")
    public String savePersona(@RequestBody Persona per){ //el @RequestBody me sirve para poder recibir los valores mediante el post que 
        personaService.savePersona(per);
        
        //me va a avisar mediante el string si es que se logro cargar la persona
        return "La persona se creo correctamete";
    }
    
    @DeleteMapping("personas/borrar/{id}")
    public String deletePersona(@PathVariable Long id){ //por otro lado, en este caso uso el @PathVariable por que la variable esta escrita en la url
        personaService.deletePersona(id);
        return "Se borro a la persona correctamente";
    }
    
    @PutMapping("personas/editar/{id}")
    public Persona editPersona(@PathVariable Long id,
                               @RequestParam ("nombre") String nuevoNombre,
                               @RequestParam ("apellido") String nuevoApellido,
                               @RequestParam ("edad") int nuevaEdad){
        
        //primero buscando esa persona en particular
        Persona per = personaService.findPersona(id);
        
        //asignandole los nuevos valores a la persona
        //esta parte tambien puede definirse en el service, desacoplando aun mas la cosa
        per.setNombre(nuevoNombre);
        per.setApellido(nuevoApellido);
        per.setEdad(nuevaEdad);
        
        //guardando los cambios realizados        
        personaService.savePersona(per);
        
        // se retorna finalmente la nueva persona
        return per;
    }                                
         
}
