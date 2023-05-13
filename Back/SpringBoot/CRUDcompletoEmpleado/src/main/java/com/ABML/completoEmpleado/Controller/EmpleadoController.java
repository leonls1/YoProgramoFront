/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ABML.completoEmpleado.Controller;

import com.ABML.completoEmpleado.Exception.ResourseNotFoundException;
import com.ABML.completoEmpleado.Model.Empleado;
import com.ABML.completoEmpleado.Repository.EmpleadoRepository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/") //"course orgini" esta va a ser la ruta del front para poder conectarse entre back y 
//  front, es tambien como una base que le agregas a la url del modo --> localhost:8080/api/v1/
@CrossOrigin("http://localhost:4200/") //esta es la url donde se desarrolla el front y como va a actuar para hablar con ella
public class EmpleadoController {
    @Autowired
    private EmpleadoRepository repo;
    
    //method to show the existent employees
    @GetMapping("/empleados")
    public List<Empleado> traerTodos(){
        List<Empleado> lista = repo.findAll();
        return lista;
    }
    
    @PostMapping("/crear")
    public Empleado saveEmpleado(@RequestBody Empleado empleado){
        
        return repo.save(empleado);
    }
    //para buscar un empleado en especifico
    @GetMapping("empleados/{id}")
    public ResponseEntity<Empleado> obtenerEmpleadoPorId(@PathVariable Long id){
        Empleado empleado = repo.findById(id) //busca el empleado en el repositorio usando el id recibido por parametro
                .orElseThrow(() -> new ResourseNotFoundException("no existe el empleado con el Id: " + id)); //si no lo encuentra crea una excepcion con el mensaje para indicar la inexistencia
       return ResponseEntity.ok(empleado); //al final, devuelve un ResponseEntity con el empleado si es que lo encuentra
       //o con el mensaje si no existe        
    }
    
    //para editar a un empleado en especifico, similar al de arriba solo que tambien lo actualiza
    @PutMapping("empleados/{id}")
    public ResponseEntity<Empleado> actualizarEmpleado(@PathVariable Long id,
                                                       @RequestBody Empleado detallesEmpleado){//recibe los nuevos datos del empleado
        Empleado empleado = repo.findById(id)
                 .orElseThrow(() -> new ResourseNotFoundException("no existe el empleado con el Id: " + id));
         
        //cargar los datos actualizados
        empleado.setNombre(detallesEmpleado.getNombre());
        empleado.setApellido(detallesEmpleado.getApellido());
        empleado.setEmail(detallesEmpleado.getEmail());
        
        //actualizar la DB
        Empleado empleadoActualizado = repo.save(empleado); 
        //devolver al empleado ya actualizado
        return ResponseEntity.ok(empleadoActualizado);
                 
    }
   
    @DeleteMapping("/empleados/{id}")
    public  ResponseEntity<Map<String,Boolean>>  eliminarEmpleado(@PathVariable Long id){
        Empleado empleado = repo.findById(id)
				            .orElseThrow(() -> new ResourseNotFoundException("No existe el empleado con el ID : " + id));
		
		repo.delete(empleado);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar",Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
    }

}
