/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SuperMarket.CRUD.Controller;

import com.SuperMarket.CRUD.DTO.Message;
import com.SuperMarket.CRUD.DTO.ProductDto;
import com.SuperMarket.CRUD.Entity.Product;
import com.SuperMarket.CRUD.Service.IProductService;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
@RequestMapping("/product")
@CrossOrigin(origins = "http//localhost:4200")
public class ProductController {
    
    @Autowired
    IProductService service;
    
    
    @GetMapping("/list")
    public ResponseEntity<List<Product>> list(){
        List<Product> list= service.getAll();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<Product> getOne(@PathVariable Long id){
        if(!service.existById(id)){
            return new ResponseEntity(new Message("no existe"), HttpStatus.NOT_FOUND); //si no lo encuentra por el id me devuelve el error y el estado de not found
        }
        
        //la anterior es una validacion para ver que exista y asi este apartado no me tira error
        Product product = service.getOne(id).get();
        return new ResponseEntity(product, HttpStatus.OK);
    }
    
    @GetMapping("/detailName/{name}")
    public ResponseEntity<Product> getOne(@PathVariable String name){
        if(!service.existByName(name)){
            return new ResponseEntity(new Message("no existe"), HttpStatus.NOT_FOUND); //si no lo encuentra por el id me devuelve el error y el estado de not found
        }
        
        //la anterior es una validacion para ver que exista y asi este apartado no me tira error
        Product product = service.getByName(name).get();
        return new ResponseEntity(product, HttpStatus.OK);
    }
    
    
    //en este caso recibe un dto ya que el id me lo genero en el momento de crear un nuevo producto
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody ProductDto productDto){
        //validacion si el nombre esta en blanco
        if(StringUtils.isBlank(productDto.getName())){
            return new ResponseEntity(new Message("El nombre es obligatorio"),HttpStatus.BAD_REQUEST);
        }
        //validacion precio no negativo
        if(productDto.getPrice()<0){
            return new ResponseEntity(new Message("El precio no puede ser menor a cero"), HttpStatus.BAD_REQUEST);
        }
        //validacion que no existe aun el nombre del producto
        if(service.existByName(productDto.getName())){
            return new ResponseEntity(new Message("El producto con ese nombre ya existe"),HttpStatus.BAD_REQUEST);
        }
        //instanciacion del producto
        Product product = new Product(productDto.getPrice(), productDto.getName(), productDto.getExpirationDate(), productDto.getType());
        //guardando el producto
        service.save(product);
        return new ResponseEntity(new Message("Producto Creado"),HttpStatus.OK);
    }   
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable Long id,@RequestBody ProductDto productDto){
        if(!service.existById(id)){
            return new ResponseEntity(new Message("No existe ese producto"), HttpStatus.NOT_FOUND);
        }
        if(StringUtils.isBlank(productDto.getName())){
            return new ResponseEntity(new Message("El nombre es obligatorio"),HttpStatus.BAD_REQUEST);
        }
        //validacion precio no negativo
        if(productDto.getPrice()<0 || productDto.getPrice() == null){
            return new ResponseEntity(new Message("El precio no puede ser menor a cero"), HttpStatus.BAD_REQUEST);
        }
        //validando que si existe el nombre se trate del producto en cuestion y no de otro, esto mediante el nombre y el id 

        if(service.existByName(productDto.getName()) && service.getByName(productDto.getName()).get().getId() != id){
            return new ResponseEntity(new Message("El nombre es de un producto con otro id"),HttpStatus.BAD_REQUEST);
        }
        Product productToEdit = service.getOne(id).get();
        productToEdit.setName   (productDto.getName() );
        productToEdit.setPrice(productDto.getPrice());
        productToEdit.setExpirationDate(productDto.getExpirationDate());
        productToEdit.setType(productDto.getType());
        
        service.update(id, productToEdit);
        return new ResponseEntity(new Message("Producto actualizado"), HttpStatus.OK);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        if(!service.existById(id))
            return new ResponseEntity(new Message("no existe ese producto"),HttpStatus.NOT_FOUND);
        service.delete(id);
        return new ResponseEntity(new Message("producto eliminado"),HttpStatus.OK);
    }
}
