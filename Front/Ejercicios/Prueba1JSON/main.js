fetch('http://127.0.0.1:5500/front/Ejercicios/Prueba1JSON/pasajeros.json').then((Response) => Response.json()).then
((data) => console.log(data))
