/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.API1_Consultas.Consultas_basicas.Controller;

import java.time.LocalDate;
import java.time.Month;
import java.time.Period;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class API1_controller {
    
    @GetMapping("/hola")
    public String decirHola(){
        return "hola mundo";
    }
   
    @GetMapping("/hola/{nombre}")
    public String decirHola2(@PathVariable String nombre){
        return "hola mundo," + nombre;
    }
    
    @GetMapping
    public String inicio(){
        return "Bienvenido";
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////// 
   // API convertir temperaturas
    @GetMapping("farenheitACelcius/{temp}")
    public String calcularTemperatura(@PathVariable int temp){
        return "la temperatura: " + temp + " en grados celcius es de: " + (temp-32)*5/9;
    }
    
    @GetMapping("/celciusAFarenheit/{temp}")
    public String calcularTemperatura2(@PathVariable int temp){
        return "la temperatura: " + temp + " en grados farenheit es de: " + (temp*9/5+32);
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Api calcular Edad
    @GetMapping("/calcularedad/{dia}/{mes}/{anio}")
    public String calcularedad(@PathVariable int dia,
                               @PathVariable int mes,
                               @PathVariable int anio){
        var nacimiento =  LocalDate.of(anio, mes, dia);
        LocalDate ahora =  LocalDate.now();
        Period periodo = Period.between(nacimiento, ahora);
       // Years edad = Years.yearsBetween(nacimiento, now);
        return "Tu edad es de :" +periodo.getYears() + " años con " + periodo.getMonths() + " meses  y " + periodo.getDays()+ " dias";
    }
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //Api Reposteria
    //cargar una lista y consultar las cosas sin gluten
    

}

