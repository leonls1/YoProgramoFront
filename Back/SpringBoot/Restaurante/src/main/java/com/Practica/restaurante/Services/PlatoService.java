/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.Practica.restaurante.Services;

import com.Practica.restaurante.Model.Plato;
import com.Practica.restaurante.Repository.PlatoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author leon
 */
@Service
public class PlatoService implements IPlatoService{
    @Autowired 
    private PlatoRepository plaRepo;

    @Override
    public List<Plato> getPlatos() {
        List<Plato> listaPlatos = plaRepo.findAll();
        return listaPlatos;
    }

    @Override
    public void createPlato(Plato platito) {
        plaRepo.save(platito);
                //va a recibir la identeidad para poder almacenarla luego
    }

    @Override
    public void deletePlato(Long id) {
       plaRepo.deleteById(id);
    }

    @Override
    public Plato findPlato(Long id) {
        Plato platito = plaRepo.findById(id).orElse(null);
        return platito;
    }
}
