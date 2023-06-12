/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.CV.BackEnd.Security.Controller;

import com.CV.BackEnd.Security.Dto.JwtDto;
import com.CV.BackEnd.Security.Dto.LoginUsuario;
import com.CV.BackEnd.Security.Dto.NuevoUsuario;
import com.CV.BackEnd.Security.Entity.Rol;
import com.CV.BackEnd.Security.Entity.Usuario;
import com.CV.BackEnd.Security.Enums.RolNombre;
import com.CV.BackEnd.Security.Jwt.JwtProvider;
import com.CV.BackEnd.Security.Service.RolService;
import com.CV.BackEnd.Security.Service.UsuarioService;
import jakarta.validation.Valid;
import java.util.HashSet;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    PasswordEncoder passEncoder;
    @Autowired
    AuthenticationManager authManger;
    @Autowired
    UsuarioService userService;
    @Autowired
    RolService rolService;
    @Autowired
    JwtProvider jwtProvider;

    @PostMapping("/new") //la ruta para crear un nuevo usuario
    //metodo para crear un nuevo usuario
    public ResponseEntity<?> nuevo(@Valid @RequestBody NuevoUsuario nuevoUsuario, BindingResult bindingResults) {

        //validando que los campos esten bien ingresados        
        if (bindingResults.hasErrors()) {
            return new ResponseEntity(new Mensaje("campos mal puesto o email invalido"), HttpStatus.BAD_REQUEST);
        }
        //validando que el nombre de usuario no exista aun       

        if (userService.existByNombreUsuario(nuevoUsuario.getNombreUsuario())) {
            return new ResponseEntity(new Mensaje("Ese nombre de usuario ya existe"), HttpStatus.BAD_REQUEST);
        }

        //validando que el email no exista ya
        if (userService.existByEmailUsuario(nuevoUsuario.getEmail())) {
            return new ResponseEntity(new Mensaje("este email ya existe"), HttpStatus.BAD_REQUEST);
        }

        //si luego de validar los campos anteriores pasa sin problema es entonces que genera el nuevo usuario
        Usuario usuario = new Usuario(nuevoUsuario.getNombre(), 
                                 nuevoUsuario.getNombreUsuario(), 
                                       nuevoUsuario.getEmail(), 
                                     passEncoder.encode(nuevoUsuario.getPassword()));//aca va a recibir la contraseña y codificarla para luego cargarla en la DB
        
       
        //por defecto todos tiene rol user
        Set<Rol> roles = new HashSet<>();
        roles.add(rolService.getByRolNombre(RolNombre.ROLE_USER).get());
        
        
        //a menos que diga que es un admin y entonces se le asigna el rol de admin
        if(nuevoUsuario.getRoles().contains("admin"))
            roles.add(rolService.getByRolNombre(RolNombre.ROLE_ADMIN).get());
        usuario.setRoles(roles);
        userService.save(usuario); //se guarda finalmente el usuario
        
        return new ResponseEntity(new Mensaje("Usuario Creado"), HttpStatus.CREATED); //el mensaje de estado indica que se ha creado el
                //usuario correctamente
    }
     @PostMapping("/login")
    //metodo para logIn
    public ResponseEntity<JwtDto> login(@Valid @RequestBody LoginUsuario loginUsuario, BindingResult bindingResult){
        if (bindingResult.hasErrors())
            return new ResponseEntity(new Mensaje("campos mal ingresados"), HttpStatus.BAD_REQUEST);
            
        
        //authentificar el usuario que se carga
        Authentication authentication = authManger.authenticate(new UsernamePasswordAuthenticationToken(
        loginUsuario.getNombreUsuario(), loginUsuario.getPasword()));
        
        SecurityContextHolder.getContext().setAuthentication(authentication);
            
        String jwt = jwtProvider.generateToken(authentication);
        
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
             
        JwtDto jwtDto = new JwtDto(jwt, userDetails.getUsername(), userDetails.getAuthorities());
        
        //si todo sale okidoki entonces entra bien con el usuario y envia un status 200=OK
        return new ResponseEntity(jwtDto, HttpStatus.OK);
    }
}


