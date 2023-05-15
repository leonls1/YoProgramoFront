/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.CV.BackEnd.Security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class JWTAuthorizationFilter extends OncePerRequestFilter{

    @Override
    protected void doFilterInternal(HttpServletRequest request, 
                                    HttpServletResponse response, 
                                    FilterChain filterChain) throws ServletException, IOException {
        
        String bearerToken = request.getHeader("Authorization");

        if(bearerToken != null && bearerToken.startsWith("bearer")){
            String token = bearerToken.replace("bearer ", "");
            UsernamePasswordAuthenticationToken usenamePAT = TokenUtils.getAuthentication(token);
            SecurityContextHolder.getContext().setAuthentication(usenamePAT);        
            }

            filterChain.doFilter(request, response);
        }
    
}
