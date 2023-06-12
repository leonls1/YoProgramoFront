    /*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ABML.completoEmpleado.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//para cuando no exista el empleado buscado
@ResponseStatus(value= HttpStatus.NOT_FOUND)
public class ResourseNotFoundException extends RuntimeException{
    
    private static final long serialVersionID =1L;
    
    public ResourseNotFoundException(String mensaje){
        super(mensaje); 
    }
}
