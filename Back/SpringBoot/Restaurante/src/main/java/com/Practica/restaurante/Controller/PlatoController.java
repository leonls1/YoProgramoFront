/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Practica.restaurante.Controller;

import com.Practica.restaurante.Model.Plato;
import com.Practica.restaurante.Services.IPlatoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author leon
 */
@RestController
public class PlatoController {
 
    @Autowired
    private IPlatoService servicio;
    
    @GetMapping("/plato/traer")
    public List<Plato> traerPlatos(){
        List<Plato> platos = servicio.getPlatos();
        return platos;
    }
    
    @GetMapping("/prueba")
     public String provando(){
         return "Probando conexion";
     }
    
    @PostMapping("/plato/crear")        
    public String crearPlato(@RequestBody Plato platito){
        servicio.createPlato(platito); 
        return "Plato cargado correctamente";
    }
    
    @PutMapping("/plato/editar/{id}")//descripcion, nombre, precio
    public Plato editarPlato(@PathVariable Long id,
                             @RequestParam("descripcion") String nuevaDesc,
                             @RequestParam("nombre") String nuevoNombre,
                             @RequestParam("precio") int nuevoPrecio){
        Plato platito = servicio.findPlato(id);
        
        if(platito instanceof Plato){
            servicio.deletePlato(id);
            System.out.println("Se ha eliminado el plato correctamente") ;
            
            platito.setNombre(nuevoNombre);
            platito.setDescripcion(nuevaDesc);
            platito.setPrecio(nuevoPrecio);
        
            servicio.createPlato(platito);           
        }
        else       
            System.out.println( "No existe ese plato");
        return platito;
    }
            
            
    @DeleteMapping("/plato/borrar/{id}")
    public String deletePlato(@PathVariable Long id){
        Plato platito = servicio.findPlato(id);
        
        if(platito instanceof Plato){
            servicio.deletePlato(id);
            return "Se ha eliminado el plato correctamente";
        }
        else
            return "No existe ese plato";
        
    }
    
}
