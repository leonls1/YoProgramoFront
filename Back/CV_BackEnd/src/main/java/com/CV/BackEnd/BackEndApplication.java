package com.CV.BackEnd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class BackEndApplication {

	public static void main(String[] args) {
            System.out.println("pass: "+ new BCryptPasswordEncoder().encode("leon"));
		SpringApplication.run(BackEndApplication.class, args);
	}

}
