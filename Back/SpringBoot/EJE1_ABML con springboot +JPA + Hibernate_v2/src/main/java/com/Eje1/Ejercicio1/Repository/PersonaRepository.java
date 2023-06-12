/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.Eje1.Ejercicio1.Repository;

import com.Eje1.Ejercicio1.Models.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository //indicandole que se trata de un repositorio esta clase

//es una interface que se extiende desde JpaRepository(la encargada de manejar repositorios JPA)
//en los parametros tenes que mandarle <claseAPersistir, TipoDeDato de su Id>
public interface PersonaRepository extends JpaRepository<Persona, Long>{
    
}
