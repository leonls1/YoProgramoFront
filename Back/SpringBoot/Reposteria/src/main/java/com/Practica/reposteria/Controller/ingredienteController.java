/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Practica.reposteria.Controller;

import com.Practica.reposteria.Model.ingrediente;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author leon
 */
@RestController
public class ingredienteController {
    List<ingrediente> listaIngredientes =  new ArrayList<>();
    List<ingrediente> ingredientesSinGluten =  new ArrayList<>();
    List<ingrediente> ingredientesConGluten =  new ArrayList<>();
    List<String> lista = new ArrayList<>();
    
    ingrediente ing1 = new ingrediente(false, "harina comun");
    ingrediente ing2 = new ingrediente(true, "harina de arroz");
    ingrediente ing3 = new ingrediente(true, "huevo");



    private void asignarListas(){
        for(int i=0; i< listaIngredientes.size(); i++){
            if(listaIngredientes.get(i).isSinGluten())
                ingredientesSinGluten.add(listaIngredientes.get(i));
            
            else
                ingredientesConGluten.add(listaIngredientes.get(i));
        }
    }
  //son buenos intentos pero como lo que recibe esta en formato JSON parece no poder analizarlo o cargarlo bien  a la cosa
    @GetMapping("/ingredientes/traerSinGluten")
    public List<ingrediente> traerIngredientesSinGluten(){

        return ingredientesSinGluten;

    }
   
    @GetMapping("/ingredientes/traerConGluten")
    public List<ingrediente> traerIngredientesConGluten(){

        return ingredientesConGluten;

    }
    
        @PostMapping("/ingredientes/cargarLista")
    public String cargarLista(@RequestBody List<ingrediente> lista){
        listaIngredientes = lista;
        asignarListas();
        return "Lista cargada correctamente";
    }
   
    
    
}
