FROM amazoncorretto:17:alpine-jdk
maintainer LeonLS//quien es el dueño
copy  target/BackEnd-0.0.1-SNAPSHOT leonLS-app.jar  //donde se va a copiar el empaquetado(lo que le sigue es el nombre que tendra finalmente)
entrypoint ["java"      , "jar", "leonLS-app.jar"] //la primera instruccion en ejecutarse